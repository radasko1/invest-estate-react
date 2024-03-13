import "./Location.css";
import Dropdown from "../dropdown/Dropdown";
import { EstatePropertyLocationType } from "../../models/estate-property-location.type";
import { DropdownOptionModel } from "../../models/dropdown-option.model";

export default function Location(props: {
  onSelect?: (option: EstatePropertyLocationType) => void;
}) {
  function handleSelect(option: DropdownOptionModel) {
    if (props.onSelect) {
      const location = option.value as EstatePropertyLocationType;
      props.onSelect(location);
    }
  }

  return (
    <div className="location">
      <h3>Location</h3>
      <Dropdown
        options={[
          { label: "California", value: "california" },
          { label: "New York", value: "new_york" },
        ]}
        onSelect={handleSelect}
      />
    </div>
  );
}
