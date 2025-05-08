import ScheduleMeetingForm from "@/components/schedule-meeting-form";
import TimeZoneVisualizer from "@/components/timezone-visualizer";
import SocialShare from "@/components/social-share";
import { useState } from "react";

const CreateMeeting = () => {
  const [meetingPreview, setMeetingPreview] = useState({
    title: "My Pet Meeting",
    date: new Date()
  });

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="md:flex md:space-x-8">
        <div className="md:w-2/3">
          <ScheduleMeetingForm />
        </div>
        
        <div className="md:w-1/3">
          <TimeZoneVisualizer 
            meetingTitle={meetingPreview.title}
            meetingDate={meetingPreview.date}
            className="mb-8"
          />
          <SocialShare 
            data={{
              title: "Join my pet meeting!",
              text: `I'm organizing "${meetingPreview.title}" with my pet. Would you like to join us?`,
              url: window.location.href
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateMeeting;
