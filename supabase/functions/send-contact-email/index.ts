import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

// Rate limiting: Store timestamps of recent submissions by IP
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 5;

// HTML escape function to prevent XSS
const escapeHtml = (str: string): string => {
  return str.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return entities[char];
  });
};

// Input validation with strict limits
const validateInput = (data: ContactEmailRequest): void => {
  if (!data.name || data.name.trim().length === 0 || data.name.length > 100) {
    throw new Error("Name must be between 1 and 100 characters");
  }
  if (!data.email || data.email.trim().length === 0 || data.email.length > 255) {
    throw new Error("Email must be between 1 and 255 characters");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error("Invalid email format");
  }
  if (data.organization && data.organization.length > 200) {
    throw new Error("Organization must be less than 200 characters");
  }
  if (!data.subject || data.subject.trim().length === 0 || data.subject.length > 200) {
    throw new Error("Subject must be between 1 and 200 characters");
  }
  if (!data.message || data.message.trim().length === 0 || data.message.length > 2000) {
    throw new Error("Message must be between 1 and 2000 characters");
  }
};

// Check rate limit for an IP address
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Remove timestamps outside the window
  const recentTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW);
  
  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }
  
  // Add current timestamp
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  
  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.every(ts => now - ts > RATE_LIMIT_WINDOW)) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  return true;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0] || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      console.warn("Rate limit exceeded for IP:", clientIp);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Too many requests. Please try again later." 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, organization, subject, message }: ContactEmailRequest = await req.json();
    
    // Validate input
    validateInput({ name, email, organization, subject, message });

    console.log("Processing contact email from:", email);

    // Send email using Resend API directly with sanitized HTML
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["info@diversa.earth"],
        subject: `Contact Form: ${escapeHtml(subject)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ''}
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
        reply_to: email,
      }),
    });

    const result = await emailResponse.json();
    if (!emailResponse.ok) {
      console.error("Resend API error:", result);
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error.message);
    
    // Return generic error message to client, log details server-side
    const isValidationError = error.message.includes("must be") || 
                              error.message.includes("Invalid email");
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: isValidationError ? error.message : "Failed to send message. Please try again later."
      }),
      {
        status: isValidationError ? 400 : 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
