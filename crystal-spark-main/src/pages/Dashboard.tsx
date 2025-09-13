import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Shield, TrendingUp, Clock, AlertTriangle } from "lucide-react";

const recentCases = [
  { id: "1", name: "Corporate Fraud Investigation", type: "Financial Crime", status: "active", priority: "high" },
  { id: "2", name: "Identity Theft Case", type: "Cyber Crime", status: "pending", priority: "medium" },
  { id: "3", name: "Property Dispute Resolution", type: "Civil Case", status: "closed", priority: "low" },
  { id: "4", name: "Insurance Claim Fraud", type: "Financial Crime", status: "active", priority: "high" },
  { id: "5", name: "Employment Discrimination", type: "Civil Case", status: "review", priority: "medium" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to LegalFlow</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Cases"
          value="2,847"
          subValue="+12% from last month"
          icon={FileText}
          variant="primary"
        />
        <StatsCard
          title="Active Cases"
          value="347"
          subValue="23 high priority"
          icon={Clock}
          variant="warning"
        />
        <StatsCard
          title="People Involved"
          value="1,249"
          subValue="witnesses, suspects"
          icon={Users}
        />
        <StatsCard
          title="Resolution Rate"
          value="87%"
          subValue="+5% this quarter"
          icon={TrendingUp}
          variant="success"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Case Statistics */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Case Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">156</div>
                  <p className="text-sm text-muted-foreground">Financial Crime</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">89</div>
                  <p className="text-sm text-muted-foreground">Cyber Crime</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">102</div>
                  <p className="text-sm text-muted-foreground">Civil Cases</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Financial Crime</span>
                  <span>45%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-2 bg-primary rounded-full" style={{ width: "45%" }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Cyber Crime</span>
                  <span>26%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-2 bg-warning rounded-full" style={{ width: "26%" }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Civil Cases</span>
                  <span>29%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-2 bg-success rounded-full" style={{ width: "29%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Cases */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Cases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentCases.map((case_) => (
              <div key={case_.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{case_.name}</p>
                  <p className="text-xs text-muted-foreground">{case_.type}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Badge 
                    variant={case_.status === 'active' ? 'default' : case_.status === 'closed' ? 'secondary' : 'outline'}
                  >
                    {case_.status}
                  </Badge>
                  <Badge 
                    variant={case_.priority === 'high' ? 'destructive' : case_.priority === 'medium' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {case_.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}