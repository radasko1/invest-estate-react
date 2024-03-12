import "./Location.css";
import { DropdownOptionModel } from "../../models/dropdown-option.model";
import Dropdown from "../dropdown/Dropdown";

type Props = {
  onSelect?: (option: DropdownOptionModel) => void;
};

export default function Location({ onSelect }: Props) {
  return (
    <div className="location">
      <h3>Location</h3>
      <Dropdown
        options={[
          { label: "California", value: "california" },
          { label: "New York", value: "new_york" },
        ]}
        onSelect={onSelect}
      />
    </div>
  );
}
