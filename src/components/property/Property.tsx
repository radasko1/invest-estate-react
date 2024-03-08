import "./Property.css";
import { PropertyTypeModel } from "../../models/property.model";

type Props = {
  id: PropertyTypeModel;
  icon: string;
  name: string;
  isActive: boolean;
  onClick(type: PropertyTypeModel): void;
};

export default function Property({
  id,
  icon,
  name,
  isActive,
  onClick,
}: Props) {
  return (
    <div
      className={"property" + (isActive ? " active" : "")}
      onClick={() => onClick(id)}
    >
      <div className="property-wrapper">
        <div className="property-icon-wrapper">
          <i className={`property-icon ${icon}`}></i>
        </div>
        <span className="property-name">{name}</span>
      </div>
    </div>
  );
}
