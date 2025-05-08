interface JobDetailsProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  isEducation?: boolean;
}

const JobDetails: React.FC<JobDetailsProps> = ({
  title,
  company,
  location,
  period,
  responsibilities,
  isEducation = false
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h4 className="text-lg font-bold text-primary">{title}</h4>
        <span className="text-sm font-medium animated-badge">{period}</span>
      </div>
      
      <p className="text-gray-600 mb-4">{company} - {location}</p>
      
      <div className="mb-3">
        <h5 className="font-bold text-gray-700 mb-2">
          {isEducation ? "Áreas de estudo:" : "Responsabilidades:"}
        </h5>
        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
