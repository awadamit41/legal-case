import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, Plus } from "lucide-react";

// Sample data for demonstration
const sampleReports = [
  {
    caseId: "RPT-001",
    reportId: "R-2024-001",
    dateTime: "2024-01-15 14:30",
    reportedBy: "John Smith",
    location: "123 Main St, Downtown",
    suspects: "Unknown male, 5'8\", dark clothing",
    victims: "Sarah Johnson",
    witnesses: "Mark Davis, Lisa Chen",
    evidenceCollected: "CCTV footage, fingerprints, witness statements",
    incidentDescription: "Burglary at residential property. Entry through rear window.",
    actionTaken: "Scene secured, evidence collected, investigation initiated",
    officer: "Officer Martinez",
    status: "Under Investigation"
  },
  {
    caseId: "RPT-002", 
    reportId: "R-2024-002",
    dateTime: "2024-01-16 09:15",
    reportedBy: "Store Manager",
    location: "Downtown Mall, Store #15",
    suspects: "Jane Doe (ID confirmed)",
    victims: "Store inventory",
    witnesses: "Security guard, 2 customers",
    evidenceCollected: "Security footage, receipts, inventory logs",
    incidentDescription: "Shoplifting incident - suspect concealed items in bag",
    actionTaken: "Suspect detained, evidence secured",
    officer: "Detective Williams",
    status: "Closed"
  },
  {
    caseId: "RPT-003",
    reportId: "R-2024-003", 
    dateTime: "2024-01-17 22:45",
    reportedBy: "Anonymous caller",
    location: "Park Avenue & 5th Street",
    suspects: "Two males, approximately 20-25 years old",
    victims: "Michael Brown",
    witnesses: "Nearby residents",
    evidenceCollected: "Physical evidence, photos, medical records",
    incidentDescription: "Assault incident in public area. Victim sustained minor injuries.",
    actionTaken: "Victim transported to hospital, scene documented",
    officer: "Sergeant Thompson",
    status: "Open"
  }
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'open':
      return 'destructive';
    case 'under investigation':
      return 'default';
    case 'closed':
      return 'secondary';
    default:
      return 'outline';
  }
};

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Manage and view all case reports</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Report
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Reports</CardTitle>
          <CardDescription>Complete list of case reports with detailed information</CardDescription>
          
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search reports..." className="pl-10" />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case ID / Report ID</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Reported By</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Suspect(s)</TableHead>
                  <TableHead>Victim(s)</TableHead>
                  <TableHead>Witness(es)</TableHead>
                  <TableHead>Evidence Collected</TableHead>
                  <TableHead>Incident Description</TableHead>
                  <TableHead>Action Taken</TableHead>
                  <TableHead>Officer/Investigator</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleReports.map((report, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-semibold">{report.caseId}</div>
                        <div className="text-sm text-muted-foreground">{report.reportId}</div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">{report.dateTime}</TableCell>
                    <TableCell>{report.reportedBy}</TableCell>
                    <TableCell className="max-w-32 truncate" title={report.location}>
                      {report.location}
                    </TableCell>
                    <TableCell className="max-w-32 truncate" title={report.suspects}>
                      {report.suspects}
                    </TableCell>
                    <TableCell>{report.victims}</TableCell>
                    <TableCell className="max-w-32 truncate" title={report.witnesses}>
                      {report.witnesses}
                    </TableCell>
                    <TableCell className="max-w-40 truncate" title={report.evidenceCollected}>
                      {report.evidenceCollected}
                    </TableCell>
                    <TableCell className="max-w-48 truncate" title={report.incidentDescription}>
                      {report.incidentDescription}
                    </TableCell>
                    <TableCell className="max-w-40 truncate" title={report.actionTaken}>
                      {report.actionTaken}
                    </TableCell>
                    <TableCell>{report.officer}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}