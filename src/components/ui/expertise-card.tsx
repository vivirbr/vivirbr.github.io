
import { cn } from "@/lib/utils";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function ExpertiseCard({ 
  title, 
  description, 
  icon,
  className 
}: ExpertiseCardProps) {
  return (
    <div 
      className={cn(
        "bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full flex flex-col",
        className
      )}
    >
      <div className="bg-diversa-teal/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-diversa-teal">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
}
