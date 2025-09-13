import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subValue?: string;
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning";
}

export function StatsCard({ title, value, subValue, icon: Icon, variant = "default" }: StatsCardProps) {
  const variantStyles = {
    default: "bg-card",
    primary: "bg-gradient-primary text-primary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground"
  };

  return (
    <Card className={`shadow-card transition-all hover:shadow-elegant ${variantStyles[variant]}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 opacity-70" />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-2xl font-bold">{value}</div>
          {subValue && <div className="text-xs opacity-70">{subValue}</div>}
        </div>
      </CardContent>
    </Card>
  );
}