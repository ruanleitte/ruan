import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

type ProjectCategory = "all" | "web" | "ui" | "brand";

export function ProjectsSection() {
  const [category, setCategory] = useState<ProjectCategory>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
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

  if (error) {
    toast({
      title: "Error loading projects",
      description: "Please try again later",
      variant: "destructive",
    });
  }

  const filteredProjects = projects?.filter((project) => {
    if (category === "all") return true;
    return project.category === category;
  });

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-[hsl(var(--light))] section-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-title">PORTFOLIO</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">
            My Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work spanning web development, UI/UX
            design, and brand identity projects.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            onClick={() => setCategory("all")}
            className={`rounded-full px-4 py-2 ${
              category === "all"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => setCategory("web")}
            className={`rounded-full px-4 py-2 ${
              category === "web"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
            }`}
          >
            Web Development
          </Button>
          <Button
            onClick={() => setCategory("ui")}
            className={`rounded-full px-4 py-2 ${
              category === "ui"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
            }`}
          >
            UI/UX Design
          </Button>
          <Button
            onClick={() => setCategory("brand")}
            className={`rounded-full px-4 py-2 ${
              category === "brand"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
            }`}
          >
            Branding
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="overflow-hidden shadow-lg project-card">
                <div className="h-56 bg-gray-200 animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            filteredProjects?.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-white shadow-lg project-card group"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark))]/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                      <a
                        href={project.link}
                        className="text-white font-medium hover:underline"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-primary text-sm font-medium">
                    {project.categoryName}
                  </span>
                  <h3 className="font-sans font-semibold text-xl mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
