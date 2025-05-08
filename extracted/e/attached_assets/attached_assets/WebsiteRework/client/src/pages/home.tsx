import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import TypeAnimation from "@/components/TypeAnimation";

export default function Home() {
  const roles = ["WEB DEVELOPER", "UI/UX DESIGNER", "PRODUCT MANAGER"];

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 py-10 md:py-0 bg-background overflow-hidden">
      <div className="w-full max-w-6xl flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Profile image with new frame design - Smaller size */}
          <motion.div 
            className="w-full max-w-sm relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Simple frame with clean border */}
            <div className="relative w-full h-full">
              <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-primary">
                {/* Image container - Using a more professional image */}
                <div className="overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Ruan Jasiel"
                    width="300"
                    height="360"
                    className="w-full h-auto object-cover aspect-[3/4]" 
                    loading="eager"
                  />
                  
                  {/* Professional overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Clean corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="w-full max-w-md space-y-5 p-4 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full">
              <span className="font-medium">HELLO</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold">
              I'M <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">RUAN JASIEL</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold">
              <div className="flex items-center">
                <span>I DO</span>
                <div className="ml-2 h-[30px] inline-flex items-center">
                  <TypeAnimation 
                    words={roles} 
                    typingSpeed={70}
                    deletingSpeed={40}
                    delayBetweenWords={1500}
                  />
                </div>
              </div>
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base">
              Com mais de 5 anos de experiência profissional. Formado em Gestão Logística,
              aprimorei minhas habilidades através de trabalhos comerciais e freelance. 
              Minhas competências incluem HTML, CSS, JavaScript, React e frameworks web modernos.
            </p>
            
            <div className="pt-4">
              <Button asChild size="lg" className="btn-hover">
                <Link href="/portfolio">
                  <span className="flex items-center gap-2 uppercase font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    PORTFOLIO
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
