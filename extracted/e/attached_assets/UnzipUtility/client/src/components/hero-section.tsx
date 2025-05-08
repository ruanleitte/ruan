import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
      <div className="px-4 py-5 sm:p-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-7/12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Schedule Pet Playdates Across Time Zones</h1>
            <p className="text-gray-600 mb-6">
              Easily coordinate pet meetups, vet appointments, and training sessions with pet owners around the world, no matter their location or time zone.
            </p>
            <div className="flex space-x-4">
              <Link href="/create-meeting">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium shadow-sm">
                  Create Meeting
                </Button>
              </Link>
              <Link href="/meetings">
                <Button variant="outline" className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-md font-medium shadow-sm">
                  Join Meeting
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-5/12 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&h=900&q=80"
              alt="Dog and cat friends"
              className="rounded-lg shadow-lg h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
