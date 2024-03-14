import "./Location.css";
import Dropdown from "../dropdown/Dropdown";
import { EstatePropertyLocationType } from "../../models/estate-property-location.type";
import { DropdownOptionModel } from "../../models/dropdown-option.model";

type LocationDropdownModel = DropdownOptionModel & {
  value: EstatePropertyLocationType;
};

const OPTIONS: LocationDropdownModel[] = [
  { label: "California", value: "california" },
  { label: "New York", value: "new_york" },
];

/** Location Props */
type Props = {
  location?: EstatePropertyLocationType;
  onSelect?: (option: EstatePropertyLocationType) => void;
};

export default function Location({ location, onSelect }: Props) {
  function handleSelect(option: DropdownOptionModel) {
    if (onSelect) {
      const location = option.value as EstatePropertyLocationType;
      onSelect(location);
    }
  }

  // Find selected option
  const selectedOption = OPTIONS.find((opt) => location === opt.value);

  return (
    <div className="location">
      <h3>Location</h3>
      <Dropdown
        options={OPTIONS}
        selectedOption={selectedOption}
        onSelect={handleSelect}
      />
    </div>
  );
}
