import SkillCard from "@/components/skills/SkillCard";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";

const Skills = () => {
  const { language } = useLanguage();
  const { skills } = content[language];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          {skills.title} <span className="text-secondary">{skills.titleHighlight}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hard Skills */}
          <SkillCard
            title={skills.hardSkillsTitle}
            icon="fas fa-tools"
            items={skills.hardSkills}
            bulletColor="secondary"
            borderColor="primary"
          />
          
          {/* Soft Skills */}
          <SkillCard
            title={skills.softSkillsTitle}
            icon="fas fa-brain"
            items={skills.softSkills}
            bulletColor="primary"
            borderColor="secondary"
          />
          
          {/* Languages */}
          <SkillCard
            title={skills.languagesTitle}
            icon="fas fa-language"
            items={[]}
            borderColor="accent"
            isLanguageCard={true}
            languages={skills.languages}
          />
          
          {/* Technologies */}
          <SkillCard
            title={skills.technologiesTitle}
            icon="fas fa-laptop-code"
            items={[]}
            borderColor="dark"
            isTechCard={true}
            technologies={skills.technologies}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
