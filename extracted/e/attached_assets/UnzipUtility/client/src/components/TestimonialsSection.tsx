import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Testimonial } from "@shared/schema";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

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
    <section ref={sectionRef} className="py-20 bg-white section-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-title">TESTIMONIALS</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feedback from clients I've had the pleasure of working with on
            various projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="bg-[hsl(var(--light))] rounded-xl shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <div key={idx} className="h-4 w-4 bg-gray-200 rounded-full mr-1 animate-pulse"></div>
                      ))}
                    </div>
                    <div className="h-24 bg-gray-200 rounded w-full mb-6 animate-pulse"></div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 animate-pulse"></div>
                      <div>
                        <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
                        <div className="h-3 bg-gray-200 rounded w-32 animate-pulse"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            : testimonials?.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="bg-[hsl(var(--light))] rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-sans font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
}
