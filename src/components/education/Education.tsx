import DATA from "../../constant/mockData";
import { Each } from "../../utils/Each";
import Title from "../common/Title";

type EducationalExperienceType = {
  id: string;
  icon: string;
  course: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};

const EducationItem = ({ item }: { item: EducationalExperienceType }) => {
  return (
    <div className="education-item" key={item.id}>
      <div className="edu-title flex items-center">
        <img src={item.icon} className="edu-icon" alt={item.course} />
        <h3 className="edu-course">{item.course}</h3>
      </div>
      <p className="edu-info text">
        {item.institution}, {item.startDate} - {item.endDate || "Present"}
        {""} {item.degree && `${item.degree}`}
      </p>
    </div>
  );
};

const Education = () => {
  return (
    <div className="education-sc resume-block">
      <div className="container">
        <div className="education-content dotted-border-left">
          <Title titleText="Education" />
          <div className="education-list grid">
            <Each
              of={DATA.educationalExperiences}
              render={(item) => (
                <EducationItem item={item as EducationalExperienceType} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
