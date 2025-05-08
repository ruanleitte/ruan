import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce website with user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for team collaboration with task assignments, progress tracking, and deadline notifications.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      tags: ["TypeScript", "React", "Firebase", "Material UI"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts, historical data visualization, and location-based services.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      link: "#"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and fitness goals with progress visualization.",
      image: "https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["React Native", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      id: 5,
      title: "Content Management System",
      description: "Custom CMS built for a publishing company with content scheduling, user roles, and analytics integration.",
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      link: "#"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Property listing website with search filters, virtual tours, and agent communication portal.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80",
      tags: ["React", "Firebase", "Google Maps API", "Styled Components"],
      link: "#"
    }
  ];

  return (
    <div className="container py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">MY <span className="text-primary">PORTFOLIO</span></h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here's a selection of my recent projects. Each one presented unique challenges and
          opportunities to apply different technologies and problem-solving approaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative overflow-hidden h-48">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <Button asChild variant="default" className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
            <CardContent className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
