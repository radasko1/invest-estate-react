import "./Property.css";

type Props = {
  icon: string;
  name: string;
  isActive: boolean;
};

export default function Property({ icon, name, isActive }: Props) {
  return (
    <div className={"property" + (isActive ? " active" : "")}>
      <div className="property-wrapper">
        <div className="property-icon-wrapper">
          <i className={`property-icon ${icon}`}></i>
        </div>
        <span className="property-name">{name}</span>
      </div>
    </div>
  );
}
