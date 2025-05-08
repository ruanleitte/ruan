interface Language {
  name: string;
  level: string;
  percentage: number;
}

interface Technology {
  name: string;
  category: string;
  icon: string;
}

interface SkillCardProps {
  title: string;
  icon: string;
  items: string[];
  bulletColor: "primary" | "secondary";
  borderColor: string;
  isLanguageCard?: boolean;
  isTechCard?: boolean;
  languages?: Language[];
  technologies?: Technology[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  items,
  bulletColor,
  borderColor,
  isLanguageCard = false,
  isTechCard = false,
  languages = [],
  technologies = []
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-t-4 border-${borderColor}`}>
      <h3 className="text-xl font-bold mb-6 text-primary flex items-center">
        <i className={`${icon} mr-3 text-secondary`}></i> {title}
      </h3>

      {!isLanguageCard && !isTechCard && (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className={`skill-bullet ${bulletColor}-bullet`}></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {isLanguageCard && languages && (
        <div className="space-y-4">
          {languages.map((language, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{language.name}</span>
                <span>{language.level} ({language.percentage}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${language.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isTechCard && technologies && (
        <div className="grid grid-cols-2 gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center border border-gray-200 rounded-lg p-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                <i className={`${tech.icon} text-secondary`}></i>
              </div>
              <div>
                <p className="font-medium">{tech.name}</p>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
