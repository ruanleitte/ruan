interface TimelineItem {
  organization: string;
  position?: string;
  degree?: string;
  period: string;
  location?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-80 overflow-y-auto">
      <div className="timeline relative pl-8">
        {items.map((item, index) => (
          <div key={index} className="timeline-item relative pb-8 pl-6">
            <div className="timeline-dot">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-primary">{item.organization}</h4>
              <p className="text-sm text-gray-500 mb-2">{item.period}</p>
              <p className="text-gray-700 mb-0">{item.position || item.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
