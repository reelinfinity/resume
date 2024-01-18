import DATA from "../../constant/mockData";
import { Each } from "../../utils/Each";
import Title from "../common/Title";

type Certificate = {
  id: string;
  icon: string;
  provider: string;
  course: string;
  startDate: string;
  endDate: string;
};

const CertificateAward = () => {
  return (
    <div className="cert-award-sc resume-block">
      <div className="container">
        <div className="cert-award-content dotted-border-left">
          <Title titleText={"Certificates & Awards"} />
          <div className="cert-award-list grid">
            <Each
              of={DATA.certificatesAndAwards}
              render={(item) => (
                <CertificateAwardItem key={item.id} item={item} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateAward;

const CertificateAwardItem = ({ item }: { item: Certificate }) => {
  return (
    <div className="cert-award-item grid items-center">
      <div className="cert-award-icon">
        <img src={item.icon} alt="" />
      </div>
      <div className="cert-award-info grid">
        <div className="cert-award-info-l">
          <p className="cert-award-provider">{item.provider}</p>
          <h3 className="cert-award-course">{item.course}</h3>
        </div>
        <div className="cert-award-info-r flex items-center justify-end">
          {item.startDate} - {item.endDate || "Present"}
        </div>
      </div>
    </div>
  );
};
