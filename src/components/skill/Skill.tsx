import DATA from "../../constant/mockData";
import { Each } from "../../utils/Each";
import Title from "../common/Title";

type ItemType = {
  id: string;
  icon: string;
  name: string;
  description: string;
};

const Skill = () => {
  return (
    <div className="skill-sc resume-block">
      <div className="container">
        <div className="skill-content dotted-border-left">
          <Title titleText={"Skills"} />
          <div className="skill-list grid">
            <Each
              of={DATA.skills}
              render={(item) => <SkillItem key={item.id} item={item} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

const SkillItem = ({ item }: { item: ItemType }) => {
  return (
    <div className="skill-item text-center" key={item.id}>
      <div className="skill-icon">
        <img src={item.icon} alt="" />
      </div>
      <div className="skill-info">
        <h3 className="skill-name">{item.name}</h3>
        <p className="skill-description text">{item.description}</p>
      </div>
    </div>
  );
};
