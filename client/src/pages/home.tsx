import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import TypeAnimation from "@/components/TypeAnimation";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();
  
  const roles = [
    t('home.webDeveloper'), 
    t('home.uiUxDesigner'), 
    t('home.productManager')
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 py-10 md:py-0 bg-gradient-to-b from-background to-gray-50/30 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile image with fixed frame */}
          <div className="w-full max-w-[240px] relative">
            <div className="relative">
              {/* Fixed decorative frames - without any animation or transitions */}
              <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border-2 border-primary rounded-xl" style={{ zIndex: 1 }}></div>
              <div className="absolute -top-3 -left-3 w-2/3 h-2/3 border-2 border-primary/60 rounded-xl" style={{ zIndex: 1 }}></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-primary/40" style={{ zIndex: 2 }}>
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Ruan Jasiel"
                  className="w-full h-auto object-cover aspect-[3/4]" 
                  loading="eager"
                />
                
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <motion.div 
            className="w-full max-w-md space-y-6 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block bg-primary/10 rounded-full px-4 py-2">
              <span className="font-medium text-primary drop-shadow-sm">{t('common.hello').toUpperCase()}</span>
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl mb-3 font-bold uppercase">
                <span className="inline-block">{language === 'pt-br' ? 'EU SOU' : language === 'es' ? 'YO SOY' : 'I\'M'}</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 inline-block whitespace-nowrap text-3xl md:text-4xl">RUAN JASIEL</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl uppercase font-medium flex items-baseline">
                <span className="mr-2">{language === 'pt-br' ? 'EU SOU' : language === 'es' ? 'YO SOY' : 'I\'M'}</span>
                <span className="inline-flex h-[30px] items-baseline uppercase">
                  <TypeAnimation 
                    words={roles} 
                    typingSpeed={50}
                    deletingSpeed={30}
                    delayBetweenWords={1000}
                  />
                </span>
              </h2>
            </div>
            
            <p className="text-muted-foreground text-sm md:text-base">
              {t('home.intro')}
            </p>
            
            <div className="pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-md">
                <Link href="/about">
                  <span className="flex items-center gap-2 uppercase font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
                    {t('common.about').toUpperCase()}
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
