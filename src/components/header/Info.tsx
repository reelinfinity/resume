import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  property: string;
  value: string;
  size?: number;
};

const Info = ({ Icon, property, value, size = 13 }: Props) => {
  return (
    <li className="grid items-start info-item">
      <span className="info-item-icon">
        <Icon size={size} />
      </span>
      <p className="info-item-text">
        {property} <span className="text">{value}</span>
      </p>
    </li>
  );
};

export default Info;
