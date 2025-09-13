import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Download, Eye, FileText, Image, Video, Mic, Camera, Phone, UserCheck } from "lucide-react";

const documentCategories = [
  {
    title: "Finger Prints",
    description: "Fingerprint reports dated 1/1/2024",
    icon: Image,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    files: [
      { name: "fingerprint_001.pdf", date: "1/1/2024", size: "2.3 MB" },
      { name: "fingerprint_analysis.pdf", date: "1/2/2024", size: "1.8 MB" }
    ]
  },
  {
    title: "Medical Report",
    description: "Medical examination reports",
    icon: FileText,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    files: [
      { name: "medical_exam_report.pdf", date: "1/3/2024", size: "3.1 MB" },
      { name: "injury_assessment.pdf", date: "1/3/2024", size: "2.7 MB" }
    ]
  },
  {
    title: "CCTV Footage",
    description: "CCTV footage of nearby areas",
    icon: Camera,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    files: [
      { name: "cctv_cam1_20240101.mp4", date: "1/1/2024", size: "145 MB" },
      { name: "cctv_cam2_20240101.mp4", date: "1/1/2024", size: "132 MB" }
    ]
  },
  {
    title: "Call Records",
    description: "Call record details of all calls from",
    icon: Phone,
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    files: [
      { name: "call_log_suspect1.xlsx", date: "1/4/2024", size: "890 KB" },
      { name: "call_analysis_report.pdf", date: "1/5/2024", size: "1.2 MB" }
    ]
  },
  {
    title: "Call",
    description: "Audio recordings of conversations",
    icon: Mic,
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
    files: [
      { name: "interview_witness1.mp3", date: "1/6/2024", size: "12.4 MB" },
      { name: "suspect_interrogation.mp3", date: "1/7/2024", size: "28.7 MB" }
    ]
  },
  {
    title: "Witness Statement",
    description: "The details of witness statement",
    icon: UserCheck,
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-600",
    files: [
      { name: "witness_statement_1.pdf", date: "1/8/2024", size: "567 KB" },
      { name: "witness_statement_2.pdf", date: "1/9/2024", size: "623 KB" }
    ]
  }
];

const myCases = [
  { name: "Corporate Fraud Case", status: "active" },
  { name: "Identity Theft Investigation", status: "pending" },
  { name: "Property Dispute", status: "closed" },
  { name: "Insurance Fraud", status: "active" },
  { name: "Employment Case", status: "review" },
  { name: "Cyber Crime Investigation", status: "active" }
];

export default function Documents() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground">Manage all case-related documents and evidence</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
            <span className="text-sm font-medium">Case name</span>
            <span className="text-sm">Corporate Fraud Investigation</span>
            <span className="text-sm text-muted-foreground">OR</span>
            <span className="text-sm font-medium">FIR Number</span>
            <span className="text-sm">9876543210</span>
            <Button size="sm" variant="ghost">
              <Search className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* My Cases Sidebar */}
        <Card className="lg:row-span-2">
          <CardHeader>
            <CardTitle className="text-lg">My Cases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {myCases.map((case_, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors"
              >
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{case_.name}</p>
                  <Badge 
                    variant={case_.status === 'active' ? 'default' : case_.status === 'closed' ? 'secondary' : 'outline'}
                    className="text-xs mt-1"
                  >
                    {case_.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Document Categories Grid */}
        <div className="lg:col-span-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {documentCategories.map((category, index) => (
            <Card key={index} className={`${category.color} transition-all hover:shadow-card cursor-pointer`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white ${category.iconColor}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{category.title}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {category.files.map((file, fileIndex) => (
                    <div key={fileIndex} className="flex items-center justify-between p-2 bg-white/70 rounded-md">
                      <div>
                        <p className="text-xs font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{file.date} • {file.size}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-3 bg-white/50 border-white/30 hover:bg-white/70"
                >
                  View All
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create New Button */}
        <div className="lg:col-span-3 flex justify-center">
          <Button className="px-8">
            <Plus className="w-4 h-4 mr-2" />
            Create New Document Category
          </Button>
        </div>
      </div>
    </div>
  );
}