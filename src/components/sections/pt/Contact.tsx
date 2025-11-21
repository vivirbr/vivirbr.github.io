import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter menos de 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Por favor, insira um email válido")
    .max(255, "Email deve ter menos de 255 caracteres"),
  organization: z.string().trim().max(100, "Nome da organização deve ter menos de 100 caracteres").optional(),
  subject: z.string().trim().min(1, "Assunto é obrigatório").max(200, "Assunto deve ter menos de 200 caracteres"),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter menos de 1000 caracteres"),
});

export const ContactPt = () => {
  const { toast } = useToast();
  const { elementRef, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Falha ao enviar mensagem");
      }

      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });

      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Erro",
          description: "Houve um problema com seu envio. Por favor, tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@diversa.earth",
      action: "mailto:info@diversa.earth",
    },
    {
      icon: MapPin,
      title: "Localização",
      details: "Serviços remotos globais",
      action: null,
    },
    {
      icon: Phone,
      title: "Consultoria",
      details: "Agendar uma Chamada",
      action: "mailto:info@diversa.earth?subject=Solicitação de Consultoria",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="section-divider mb-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div ref={elementRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">Vamos Conversar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Entre em contato</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vamos discutir como podemos ajudar sua organização.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Informações de Contato</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div
                  className={`flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-modern hover-lift hover-glow-primary transition-all duration-300 ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-modern">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1 text-lg">{info.title}</h4>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </div>
              );

              return info.action ? (
                <a key={index} href={info.action} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className={`lg:col-span-2 ${isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"}`}>
            <Card className="bg-white shadow-modern-lg border-0">
              <CardHeader className="pb-6 pt-8">
                <CardTitle className="text-2xl font-heading font-bold text-foreground">Envie-nos uma Mensagem</CardTitle>
                <p className="text-muted-foreground mt-2">Retornaremos em até 24 horas</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        className={`${errors.name ? "border-destructive" : ""} focus:border-primary focus:ring-primary/20`}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu.email@exemplo.com"
                        className={`${errors.email ? "border-destructive" : ""} focus:border-secondary focus:ring-secondary/20`}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organização</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      placeholder="Sua organização ou empresa"
                      className={`${errors.organization ? "border-destructive" : ""} focus:border-primary focus:ring-primary/20`}
                    />
                    {errors.organization && <p className="text-sm text-destructive">{errors.organization}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Como podemos ajudá-lo?"
                      className={`${errors.subject ? "border-destructive" : ""} focus:border-secondary focus:ring-secondary/20`}
                    />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Conte-nos sobre seu projeto ou necessidades de consultoria..."
                      rows={5}
                      className={`${errors.message ? "border-destructive" : ""} focus:border-primary focus:ring-primary/20`}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-orange hover:shadow-xl"
                  >
                    {isSubmitting ? "Abrindo Email..." : "Enviar Mensagem"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
