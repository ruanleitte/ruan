import { Link } from "wouter";
import TypingEffect from "@/components/ui/typing-effect";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";

const Hero = () => {
  const { language } = useLanguage();
  const { hero } = content[language];

  return (
    <header className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-secondary">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Profile photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {hero.name}
            </h1>
            
            <div className="flex items-center justify-center md:justify-start mb-6">
              <span className="text-xl font-light mr-2">{hero.iDo}</span>
              <div className="h-8 overflow-hidden">
                <TypingEffect phrases={hero.typingPhrases} />
              </div>
            </div>
            
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href={hero.resumeUrl}
                className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.downloadButton}
              </a>
              
              <Link href="/contact">
                <a className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md font-medium transition">
                  {hero.contactButton}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
