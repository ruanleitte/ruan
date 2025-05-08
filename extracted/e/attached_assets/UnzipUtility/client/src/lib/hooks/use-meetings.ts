import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Meeting, InsertMeeting } from "@shared/schema";

export function useMeetings() {
  const { 
    data: meetings = [], 
    isLoading, 
    error 
  } = useQuery<Meeting[]>({
    queryKey: ["/api/meetings"],
  });

  const createMeetingMutation = useMutation({
    mutationFn: async (meetingData: Omit<InsertMeeting, "hostId" | "hostTimezone"> & { date: Date, time: string }) => {
      // Get user data for default values (in a real app, this would be from auth context)
      const userResponse = await fetch("/api/me", { credentials: "include" });
      const userData = await userResponse.json();
      
      // Combine date and time
      const meetingDate = new Date(meetingData.date);
      const [hours, minutes] = meetingData.time.split(':').map(Number);
      meetingDate.setHours(hours, minutes, 0, 0);
      
      // Create meeting with proper data
      const dataToSend: InsertMeeting = {
        title: meetingData.title,
        description: meetingData.description || "",
        date: meetingDate,
        hostId: userData.id || 1, // Fallback to ID 1 if user data not available
        hostTimezone: userData.timezone || "America/Chicago", // Fallback timezone
        location: meetingData.location || "",
        petType: meetingData.petType || "dog",
      };
      
      const createResponse = await apiRequest("POST", "/api/meetings", dataToSend);
      const meeting = await createResponse.json();
      
      // Add host as participant
      await apiRequest("POST", `/api/meetings/${meeting.id}/participants`, {
        userId: userData.id || 1,
        role: "pet_owner",
        timezone: userData.timezone || "America/Chicago",
      });
      
      return meeting;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/meetings"] });
    },
  });

  const upcomingMeetings = meetings
    .filter(meeting => new Date(meeting.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastMeetings = meetings
    .filter(meeting => new Date(meeting.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    meetings,
    upcomingMeetings,
    pastMeetings,
    isLoading,
    error,
    createMeeting: createMeetingMutation.mutate,
    isCreating: createMeetingMutation.isPending,
    createError: createMeetingMutation.error,
  };
}

export function useMeeting(id: number | undefined) {
  const enabled = id !== undefined;
  
  const { 
    data: meeting, 
    isLoading, 
    error 
  } = useQuery<Meeting>({
    queryKey: ["/api/meetings", id],
    enabled,
  });
  
  const { 
    data: participants = [], 
    isLoading: isLoadingParticipants, 
    error: participantsError 
  } = useQuery({
    queryKey: ["/api/meetings", id, "participants"],
    enabled,
  });
  
  return {
    meeting,
    participants,
    isLoading: isLoading || isLoadingParticipants,
    error: error || participantsError,
  };
}
