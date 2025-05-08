import { useEffect, useRef, useState } from "react";
import { 
  FaCode, 
  FaPaintBrush, 
  FaGithub, 
  FaSass, 
  FaDocker, 
  FaAws, 
  FaWordpress, 
  FaDatabase 
} from "react-icons/fa";

interface Skill {
  name: string;
  percentage: number;
}

const developmentSkills: Skill[] = [
  { name: "HTML & CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React.js", percentage: 85 },
  { name: "Node.js", percentage: 80 },
  { name: "PHP/Laravel", percentage: 75 },
];

const designSkills: Skill[] = [
  { name: "UI/UX Design", percentage: 90 },
  { name: "Figma", percentage: 95 },
  { name: "Adobe XD", percentage: 85 },
  { name: "Photoshop", percentage: 80 },
  { name: "Illustrator", percentage: 75 },
];

const technologies = [
  { name: "Git & GitHub", icon: <FaGithub className="text-3xl mb-2 text-gray-700" /> },
  { name: "Sass/SCSS", icon: <FaSass className="text-3xl mb-2 text-gray-700" /> },
  { name: "Docker", icon: <FaDocker className="text-3xl mb-2 text-gray-700" /> },
  { name: "AWS", icon: <FaAws className="text-3xl mb-2 text-gray-700" /> },
  { name: "WordPress", icon: <FaWordpress className="text-3xl mb-2 text-gray-700" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-3xl mb-2 text-gray-700" /> },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setAnimated(true);
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 section-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-title">MY EXPERTISE</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and the tools I use to build exceptional digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Development Skills */}
          <div>
            <h3 className="font-sans font-semibold text-xl mb-6 flex items-center">
              <FaCode className="text-primary mr-2" />
              Development
            </h3>

            <div className="space-y-5">
              {developmentSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="skill-bar bg-primary h-2.5 rounded-full"
                      style={{
                        width: animated ? `${skill.percentage}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div>
            <h3 className="font-sans font-semibold text-xl mb-6 flex items-center">
              <FaPaintBrush className="text-secondary mr-2" />
              Design
            </h3>

            <div className="space-y-5">
              {designSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="skill-bar bg-secondary h-2.5 rounded-full"
                      style={{
                        width: animated ? `${skill.percentage}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="font-sans font-semibold text-xl mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center justify-center hover:shadow-md transition"
              >
                {tech.icon}
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
