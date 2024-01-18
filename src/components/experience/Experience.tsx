import { FaLink } from "react-icons/fa6";
import Title from "../common/Title";
import { Each } from "../../utils/Each";
import DATA from "../../constant/mockData";
import { DiamondLgBlue, DiamondLgGreen, DiamondLgOrange, DiamondLgPink, DiamondLgYellow } from "../../assets/image";

type ExperienceType = {
  id: string;
  startDate: string;
  endDate: string;
  position: string;
  diamondColors: string[];
  company: {
    logo: string;
    name: string;
    info: string;
  };
  description: string;
  links: {
    label: string;
    url: string;
  }[];
};

const ExperienceItem = ({ item }: { item: ExperienceType }) => {
  const showDiamondImage = (color: string) => {
    if (color === "Blue") {
      return DiamondLgBlue;
    } else if (color === "Green") {
      return DiamondLgGreen;
    } else if (color === "Orange") {
      return DiamondLgOrange;
    } else if (color === "Pink") {
      return DiamondLgPink;
    } else if (color === "Yellow") {
      return DiamondLgYellow;
    }
  };
  return (
    <div className="experience-item" key={item.id}>
      <div className="exp-time flex items-center">
        <span className="start-time">{item.startDate}</span>
        <span>-</span>
        <div className="end-time">{item.endDate || "Present"}</div>
      </div>
      <div className="exp-position flex items-center flex-wrap">
        <p className="exp-position-text">{item.position}</p>
        <div className="diamond-shapes-group">
          <Each
            of={item.diamondColors}
            render={(color) => <img src={showDiamondImage(color)} alt="" />}
          />
        </div>
      </div>
      <div className="exp-company flex items-center flex-wrap">
        <div className="company-logo">
          <img src={item.company.logo} alt="" />
        </div>
        <p className="company-name">{item.company.name}</p>
        <p className="company-info text">{item.company.info}</p>
      </div>
      <p className="exp-description text">{item.description}</p>
      <div className="exp-links">
        <Each of={item.links} render={(link) => (
          <a key={link.label} href={link.url} className="text-mauve">
            <FaLink />
            <span>{link.label}</span>
          </a>)}/>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience-sc resume-block">
      <div className="container">
        <div className="experience-content dotted-border-left">
          <Title titleText="Professional Experience" />
          <div className="experience-list grid">
            <Each
              of={DATA.professionalExperiences}
              render={(item) => (
                <ExperienceItem item={item as ExperienceType} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
