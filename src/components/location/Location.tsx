import "./Location.css";
import Dropdown from "../dropdown/Dropdown";

export default function Location() {
  return (
    <div className="location">
      <h3>Location</h3>
      <Dropdown options={["California", "New York"]} />
    </div>
  );
}
