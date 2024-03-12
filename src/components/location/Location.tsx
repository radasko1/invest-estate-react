import "./Location.css";
import Dropdown from "../dropdown/Dropdown";

export default function Location() {
  return (
    <div className="location">
      <h3>Location</h3>
      <Dropdown
        options={[
          { label: "California", value: "california" },
          { label: "New York", value: "new_york" },
        ]}
      />
    </div>
  );
}
