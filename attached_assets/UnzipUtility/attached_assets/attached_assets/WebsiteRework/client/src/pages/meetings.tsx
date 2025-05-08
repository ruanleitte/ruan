import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDistance, format } from "date-fns";
import { Meeting } from "@shared/schema";
import { Plus, Calendar, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MeetingCard = ({ meeting }: { meeting: Meeting }) => {
  const meetingDate = new Date(meeting.date);
  const isUpcoming = meetingDate > new Date();
  
  return (
    <Card className="mb-4">
      <CardHeader className={`py-3 ${meeting.petType === 'dog' ? 'bg-primary-100' : meeting.petType === 'cat' ? 'bg-secondary-100' : 'bg-accent-100'}`}>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{meeting.title}</CardTitle>
          <Badge variant={isUpcoming ? "default" : "secondary"}>
            {isUpcoming ? "Upcoming" : "Past"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{format(meetingDate, "EEEE, MMMM d, yyyy 'at' h:mm a")}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{meeting.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-2 h-4 w-4" />
            <span>{formatDistance(meetingDate, new Date(), { addSuffix: true })}</span>
          </div>
        </div>
        
        {meeting.description && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">{meeting.description}</p>
          </div>
        )}
        
        <div className="mt-4 flex justify-end">
          <Link href={`/meetings/${meeting.id}`}>
            <Button variant="outline" size="sm">View Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const Meetings = () => {
  const { data: meetings, isLoading, error } = useQuery({
    queryKey: ["/api/meetings"],
  });

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Meetings</h1>
        <Link href="/create-meeting">
          <Button className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            <span>Create Meeting</span>
          </Button>
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {isLoading ? (
          <p className="text-center col-span-2">Loading meetings...</p>
        ) : error ? (
          <p className="text-center text-red-500 col-span-2">Error loading meetings</p>
        ) : meetings && meetings.length > 0 ? (
          meetings
            .sort((a: Meeting, b: Meeting) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((meeting: Meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} />
            ))
        ) : (
          <div className="text-center col-span-2 py-8">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No meetings found</h3>
            <p className="text-gray-500 mb-4">You don't have any scheduled meetings yet.</p>
            <Link href="/create-meeting">
              <Button>Schedule Your First Meeting</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meetings;
