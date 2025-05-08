import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format, addDays } from "date-fns";
import { ClockIcon } from "lucide-react";
import { formatInTimeZone } from "@/lib/timezone-utils";

interface TimeZoneVisualizerProps {
  meetingId?: number;
  meetingTitle?: string;
  meetingDate?: Date | string;
  className?: string;
}

const TimeZoneVisualizer = ({ 
  meetingId, 
  meetingTitle = "Doggy Playdate at the Park",
  meetingDate = new Date(),
  className = ""
}: TimeZoneVisualizerProps) => {
  // Get meeting data if ID is provided
  const { data: meeting } = useQuery({
    queryKey: ["/api/meetings", meetingId],
    enabled: !!meetingId
  });
  
  // Get participants if meeting ID is provided
  const { data: participants } = useQuery({
    queryKey: ["/api/meetings", meetingId, "participants"],
    enabled: !!meetingId
  });
  
  // Use provided data or data from API
  const title = meeting?.title || meetingTitle;
  const date = meeting?.date ? new Date(meeting.date) : (
    typeof meetingDate === 'string' ? new Date(meetingDate) : meetingDate
  );
  
  // Default user if not fetching participants
  const currentUser = {
    id: 1,
    name: "Alex Thompson",
    location: "Chicago, USA",
    timezone: "America/Chicago"
  };
  
  // Default participants if not fetching from API
  const defaultParticipants = [
    {
      user: {
        id: 2,
        name: "Sarah Johnson",
        location: "London, UK",
        timezone: "Europe/London"
      }
    },
    {
      user: {
        id: 3,
        name: "Michael Stevens",
        location: "Los Angeles, USA",
        timezone: "America/Los_Angeles"
      }
    },
    {
      user: {
        id: 4,
        name: "John Miller",
        location: "New York, USA",
        timezone: "America/New_York"
      }
    },
    {
      user: {
        id: 5,
        name: "Emma Davis",
        location: "Sydney, Australia",
        timezone: "Australia/Sydney"
      }
    }
  ];
  
  // Use API data or defaults
  const allParticipants = participants || defaultParticipants;
  
  return (
    <Card className={`${className}`}>
      <CardHeader className="border-b border-gray-200 bg-secondary-600 px-4 py-4 sm:px-6">
        <CardTitle className="text-lg leading-6 font-medium text-white flex items-center">
          <ClockIcon className="w-5 h-5 mr-2" />
          Time Zone Visualizer
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-5 sm:p-6">
        <p className="text-sm text-gray-500 mb-4">Visualize your meeting time across all participants' time zones</p>
        
        <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">{format(date, "EEEE, MMMM d, yyyy")}</p>
            </div>
            
            <div className="space-y-4">
              {/* Current user */}
              <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm border-2 border-primary-300">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-medium">You</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">{currentUser.name}</p>
                    <p className="text-xs text-gray-500">{currentUser.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {formatInTimeZone(date, currentUser.timezone, "h:mm a")}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatInTimeZone(date, currentUser.timezone, "EEEE, MMM d")}
                  </p>
                </div>
              </div>
              
              {/* Other participants */}
              {allParticipants.map((participant) => {
                const participantTime = formatInTimeZone(date, participant.user.timezone, "h:mm a");
                const participantDate = formatInTimeZone(date, participant.user.timezone, "EEEE, MMM d");
                const isNextDay = formatInTimeZone(date, participant.user.timezone, "yyyy-MM-dd") > 
                                  formatInTimeZone(date, currentUser.timezone, "yyyy-MM-dd");
                const isPreviousDay = formatInTimeZone(date, participant.user.timezone, "yyyy-MM-dd") < 
                                      formatInTimeZone(date, currentUser.timezone, "yyyy-MM-dd");
                
                return (
                  <div key={participant.user.id} className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{participant.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700">{participant.user.name}</p>
                        <p className="text-xs text-gray-500">{participant.user.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{participantTime}</p>
                      <p className={`text-xs ${isNextDay ? 'text-red-500' : isPreviousDay ? 'text-orange-500' : 'text-gray-500'}`}>
                        {participantDate}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeZoneVisualizer;
