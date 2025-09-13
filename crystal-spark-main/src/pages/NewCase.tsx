import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Save, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function NewCase() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("case-details");

  const handleSave = () => {
    toast({
      title: "Case Saved",
      description: "Case has been successfully created and saved to the system.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">New Case</h1>
          <p className="text-muted-foreground">Create and manage a new legal case</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
            <Label htmlFor="case-search" className="text-sm font-medium">Case name</Label>
            <Input
              id="case-search"
              placeholder="OR FIR Number"
              className="border-0 bg-transparent h-8 w-48"
            />
            <Button size="sm" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="case-details">Case Details</TabsTrigger>
          <TabsTrigger value="incident-details">Incident Details</TabsTrigger>
          <TabsTrigger value="complainant-details">Complainant Details</TabsTrigger>
        </TabsList>

        <TabsContent value="case-details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Case Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="case-name">Case Name</Label>
                  <Input id="case-name" placeholder="Enter case name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fir-number">FIR Number</Label>
                  <Input id="fir-number" placeholder="Enter FIR number" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="nashik">Nashik</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pin-code">Pin Code</Label>
                <Input id="pin-code" placeholder="Enter pin code" className="w-full md:w-1/3" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="incident-details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Incident Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="case-type">Case Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Financial Crime</SelectItem>
                      <SelectItem value="cyber">Cyber Crime</SelectItem>
                      <SelectItem value="civil">Civil Case</SelectItem>
                      <SelectItem value="criminal">Criminal Case</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Input id="section" placeholder="Enter section number" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-date">Registration Date</Label>
                  <div className="relative">
                    <Input id="reg-date" type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                      <SelectItem value="review">Under Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="police-station">Police Station</Label>
                <Input id="police-station" placeholder="Enter police station name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="incident-description">Incident Description</Label>
                <Textarea 
                  id="incident-description" 
                  placeholder="Provide detailed description of the incident"
                  className="min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="complainant-details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Complainant Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="complainant-name">Full Name</Label>
                  <Input id="complainant-name" placeholder="Enter complainant's full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complainant-phone">Phone Number</Label>
                  <Input id="complainant-phone" placeholder="Enter phone number" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="complainant-email">Email Address</Label>
                  <Input id="complainant-email" type="email" placeholder="Enter email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complainant-relation">Relation to Case</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select relation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="victim">Victim</SelectItem>
                      <SelectItem value="witness">Witness</SelectItem>
                      <SelectItem value="representative">Legal Representative</SelectItem>
                      <SelectItem value="guardian">Guardian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="complainant-address">Address</Label>
                <Textarea 
                  id="complainant-address" 
                  placeholder="Enter complete address"
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-notes">Additional Notes</Label>
                <Textarea 
                  id="additional-notes" 
                  placeholder="Any additional information about the complainant"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="px-8">
          <Save className="w-4 h-4 mr-2" />
          Save Case
        </Button>
      </div>
    </div>
  );
}