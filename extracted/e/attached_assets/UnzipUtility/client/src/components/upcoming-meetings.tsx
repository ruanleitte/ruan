import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { formatRelative, format } from "date-fns";
import { Meeting } from "@shared/schema";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MeetingItem = ({ meeting }: { meeting: Meeting }) => {
  const meetingDate = new Date(meeting.date);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  let badgeText = formatRelative(meetingDate, today).split(' at')[0];
  let badgeColor = "gray";
  
  if (meetingDate.toDateString() === today.toDateString()) {
    badgeText = "Today";
    badgeColor = "green";
  } else if (meetingDate.toDateString() === tomorrow.toDateString()) {
    badgeText = "Tomorrow";
    badgeColor = "blue";
  }
  
  const petIcon = meeting.petType === "dog" ? "🐕" : meeting.petType === "cat" ? "🐈" : "🐾";
  const bgColor = meeting.petType === "dog" ? "bg-primary-100" : meeting.petType === "cat" ? "bg-secondary-100" : "bg-accent-100";
  const textColor = meeting.petType === "dog" ? "text-primary-600" : meeting.petType === "cat" ? "text-secondary-600" : "text-accent-600";

  return (
    <li className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`flex-shrink-0 h-10 w-10 ${bgColor} rounded-full flex items-center justify-center`}>
            <span className={`text-xl ${textColor}`}>{petIcon}</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{meeting.title}</p>
            <p className="text-xs text-gray-500">
              {format(meetingDate, "MMMM d, h:mm a")}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Badge variant={badgeColor === "green" ? "success" : badgeColor === "blue" ? "default" : "secondary"}>
            {badgeText}
          </Badge>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
          <span>{meeting.location}</span>
        </div>
        <Link href={`/meetings/${meeting.id}`}>
          <a className="text-xs text-primary-600 hover:text-primary-900 cursor-pointer flex items-center">
            Details
            <ChevronRight className="h-3 w-3 ml-1" />
          </a>
        </Link>
      </div>
    </li>
  );
};

const UpcomingMeetings = () => {
  const { data: meetings, isLoading, error } = useQuery({
    queryKey: ["/api/meetings"],
  });

  return (
    <Card className="mb-8">
      <CardHeader className="border-b border-gray-200 bg-accent-500 px-4 py-4 sm:px-6">
        <CardTitle className="text-lg leading-6 font-medium text-white flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Upcoming Pet Meetings
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-5 sm:p-6">
        {isLoading ? (
          <div className="text-center py-4">Loading upcoming meetings...</div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">Failed to load meetings</div>
        ) : meetings && meetings.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {meetings
              .filter((meeting: Meeting) => new Date(meeting.date) >= new Date())
              .sort((a: Meeting, b: Meeting) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 3)
              .map((meeting: Meeting) => (
                <MeetingItem key={meeting.id} meeting={meeting} />
              ))}
          </ul>
        ) : (
          <div className="text-center py-4 text-gray-500">No upcoming meetings</div>
        )}
      </CardContent>
      <CardFooter className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <Link href="/meetings">
          <Button variant="secondary" size="sm" className="text-primary-700 bg-primary-100 hover:bg-primary-200">
            View All Meetings
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UpcomingMeetings;
