import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import { DropdownOptionModel } from "../../models/dropdown-option.model";

type Props = {
  options: Array<DropdownOptionModel>;
  showFirstOption?: boolean;
  placeholder?: string;
  selectedOption?: DropdownOptionModel;
  onSelect?: (option: DropdownOptionModel) => void;
};

export default function Dropdown({
  options,
  showFirstOption = false,
  placeholder = "Choose option",
  selectedOption,
  onSelect,
}: Props) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<DropdownOptionModel | undefined>(
    selectedOption,
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function handleOptionClick(option: DropdownOptionModel) {
    setSelected(option);
    setActive(false);

    if (onSelect) {
      onSelect(option);
    }
  }

  // Reset selected option
  useEffect(() => {
    setSelected(selectedOption);
  }, [selectedOption]);

  // Select first option
  useEffect(() => {
    if (showFirstOption) {
      setSelected(options[0]);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      const target = event.target as Node; // type assertion
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      onClick={() => setActive(!active)}
    >
      {selected && <span className="dropdown-toggle">{selected.label}</span>}
      {!selected && (
        <span className="dropdown-toggle dropdown-placeholder">
          <i>{placeholder}</i>
        </span>
      )}
      {active && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
