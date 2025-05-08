import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RectangleEllipsis } from "lucide-react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white section-fade">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Alex Morgan - Web Developer & Designer"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-sans font-bold text-xl">5+ Years</p>
              <p className="opacity-90">Professional Experience</p>
            </div>
          </div>
          
          <div>
            <span className="section-title">ABOUT ME</span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6">
              Crafting Digital Experiences With Passion
            </h2>
            <p className="text-gray-600 mb-4">
              Hello! I'm Alex Morgan, a dedicated web developer and UI/UX designer
              with a passion for creating beautiful, functional digital
              experiences that solve real problems.
            </p>
            <p className="text-gray-600 mb-6">
              With over 5 years of professional experience, I've worked with
              startups, agencies, and established companies to build websites and
              applications that not only look great but perform exceptionally. My
              approach combines technical expertise with an eye for design,
              allowing me to deliver solutions that balance aesthetics and
              functionality.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-sans font-semibold text-lg mb-3">Education</h3>
                <p className="text-gray-600 text-sm">
                  B.S. Computer Science<br />
                  University of Technology, 2018
                </p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg mb-3">Location</h3>
                <p className="text-gray-600 text-sm">
                  San Francisco, California<br />
                  Available for remote work
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                Get In Touch
                <RectangleEllipsis className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
