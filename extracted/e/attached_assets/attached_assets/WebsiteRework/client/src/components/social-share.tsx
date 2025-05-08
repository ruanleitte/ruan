import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail, MessageSquare } from "lucide-react";

interface ShareData {
  title?: string;
  text?: string;
  url?: string;
}

interface SocialShareProps {
  data?: ShareData;
  className?: string;
}

const SocialShare = ({ data = {}, className = "" }: SocialShareProps) => {
  const shareData: ShareData = {
    title: data.title || "PetMeet - Pet Owner Scheduler",
    text: data.text || "Join me for a pet meetup!",
    url: data.url || window.location.href,
  };

  const handleShare = async (platform: string) => {
    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url || '')}&quote=${encodeURIComponent(shareData.text || '')}`, '_blank');
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text || '')}&url=${encodeURIComponent(shareData.url || '')}`, '_blank');
        break;
      case "instagram":
        // Instagram doesn't have a web sharing API like Facebook or Twitter
        // Usually opens the app and users can share manually
        alert("Instagram sharing is typically done through their mobile app. Copy the link and share it manually.");
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(`${shareData.text} ${shareData.url}`)}`, '_blank');
        break;
      case "email":
        window.open(`mailto:?subject=${encodeURIComponent(shareData.title || '')}&body=${encodeURIComponent(`${shareData.text} ${shareData.url}`)}`, '_blank');
        break;
      case "native":
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (err) {
            console.error("Error sharing:", err);
          }
        } else {
          alert("Web Share API is not supported in your browser. Try the other sharing options.");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className={`bg-gradient-to-r from-primary-600 to-secondary-600 shadow rounded-lg overflow-hidden mb-8 ${className}`}>
      <div className="px-4 py-5 sm:p-6 text-white">
        <h3 className="text-lg font-medium mb-3">Share Your Pet Adventures!</h3>
        <p className="text-sm opacity-90 mb-4">
          Let friends and family know about your upcoming pet playdates and activities.
        </p>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-white text-blue-600 hover:bg-gray-100 p-2 rounded-full"
            onClick={() => handleShare("facebook")}
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Share on Facebook</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-white text-blue-400 hover:bg-gray-100 p-2 rounded-full"
            onClick={() => handleShare("twitter")}
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Share on Twitter</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-white text-pink-500 hover:bg-gray-100 p-2 rounded-full"
            onClick={() => handleShare("instagram")}
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Share on Instagram</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-white text-green-500 hover:bg-gray-100 p-2 rounded-full"
            onClick={() => handleShare("whatsapp")}
          >
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Share on WhatsApp</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-white text-gray-500 hover:bg-gray-100 p-2 rounded-full"
            onClick={() => handleShare("email")}
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Share via Email</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
