import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Edit, UserPlus, Eye } from "lucide-react";

const peopleData = {
  victims: [
    { id: "1", name: "Sarah Johnson", age: "34", gender: "Female", location: "New York", avatar: "/api/placeholder/40/40" },
    { id: "2", name: "Michael Chen", age: "28", gender: "Male", location: "California", avatar: "/api/placeholder/40/40" },
  ],
  suspects: [
    { id: "3", name: "Robert Williams", age: "45", gender: "Male", location: "Texas", avatar: "/api/placeholder/40/40" },
    { id: "4", name: "Elena Rodriguez", age: "31", gender: "Female", location: "Florida", avatar: "/api/placeholder/40/40" },
    { id: "5", name: "David Thompson", age: "39", gender: "Male", location: "Nevada", avatar: "/api/placeholder/40/40" },
  ],
  witnesses: [
    { id: "6", name: "Jessica Miller", age: "26", gender: "Female", location: "Oregon", avatar: "/api/placeholder/40/40" },
    { id: "7", name: "Andrew Davis", age: "52", gender: "Male", location: "Washington", avatar: "/api/placeholder/40/40" },
    { id: "8", name: "Maria Garcia", age: "43", gender: "Female", location: "Arizona", avatar: "/api/placeholder/40/40" },
  ],
};

interface PersonCardProps {
  person: {
    id: string;
    name: string;
    age: string;
    gender: string;
    location: string;
    avatar: string;
  };
  variant: "victim" | "suspect" | "witness";
}

function PersonCard({ person, variant }: PersonCardProps) {
  const variantColors = {
    victim: "bg-destructive/10 border-destructive/20",
    suspect: "bg-warning/10 border-warning/20",
    witness: "bg-primary/10 border-primary/20",
  };

  const badgeVariants = {
    victim: "destructive" as const,
    suspect: "secondary" as const,
    witness: "default" as const,
  };

  return (
    <Card className={`${variantColors[variant]} transition-all hover:shadow-card`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={person.avatar} alt={person.name} />
              <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">{person.name}</h4>
              <p className="text-sm text-muted-foreground">{person.age} yr, {person.gender}, {person.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost">
              <Edit className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PeopleInvolved() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">People Involved</h1>
          <p className="text-muted-foreground">Manage all individuals connected to the case</p>
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

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Victims */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Badge variant="destructive">Victims</Badge>
                <span className="text-lg">{peopleData.victims.length}</span>
              </CardTitle>
              <Button size="sm" variant="outline">
                <UserPlus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {peopleData.victims.map((person) => (
              <PersonCard key={person.id} person={person} variant="victim" />
            ))}
          </CardContent>
        </Card>

        {/* Suspects */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">Suspects</Badge>
                <span className="text-lg">{peopleData.suspects.length}</span>
              </CardTitle>
              <Button size="sm" variant="outline">
                <UserPlus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {peopleData.suspects.map((person) => (
              <PersonCard key={person.id} person={person} variant="suspect" />
            ))}
          </CardContent>
        </Card>

        {/* Witnesses */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Badge variant="default">Eye Witnesses</Badge>
                <span className="text-lg">{peopleData.witnesses.length}</span>
              </CardTitle>
              <Button size="sm" variant="outline">
                <UserPlus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {peopleData.witnesses.map((person) => (
              <PersonCard key={person.id} person={person} variant="witness" />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}