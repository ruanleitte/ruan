import { useState } from "react";
import HeroSection from "@/components/hero-section";
import UpcomingMeetings from "@/components/upcoming-meetings";
import PetProfiles from "@/components/pet-profiles";
import SocialShare from "@/components/social-share";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <HeroSection />
      
      <div className="md:flex md:space-x-8">
        <div className="md:w-2/3">
          <UpcomingMeetings />
        </div>
        
        <div className="md:w-1/3">
          <PetProfiles />
          <SocialShare />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
