import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import { DropdownOptionModel } from "../../models/dropdown-option.model";

type Props = {
  options: Array<DropdownOptionModel>;
  showFirstOption?: boolean;
  placeholder?: string;
  onSelect?: (option: DropdownOptionModel) => void;
};

export default function Dropdown({
  options,
  showFirstOption = false,
  placeholder = "Choose option",
  onSelect,
}: Props) {
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<DropdownOptionModel | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function handleOptionClick(option: DropdownOptionModel) {
    setSelectedOption(option);
    setActive(false);

    if (onSelect) {
      onSelect(option);
    }
  }

  useEffect(() => {
    if (showFirstOption) {
      setSelectedOption(options[0]);
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
      {selectedOption && (
        <span className="dropdown-toggle">{selectedOption.label}</span>
      )}
      {!selectedOption && (
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
