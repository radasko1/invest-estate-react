import "./Property.css";
import { PropertyTypeModel } from "../models/property.type";

type Props = {
  id: PropertyTypeModel;
  icon: string;
  name: string;
  isActive: boolean;
  onPropertyClick(type: PropertyTypeModel): void;
};

export default function Property({
  id,
  icon,
  name,
  isActive,
  onPropertyClick,
}: Props) {
  function handleClick() {
    onPropertyClick(id);
  }

  return (
    <div
      className={"property" + (isActive ? " active" : "")}
      onClick={handleClick}
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
