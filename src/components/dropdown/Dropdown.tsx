import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

type DropdownOption = string | number;

type Props = {
  options: Array<DropdownOption>;
  showFirstOption?: boolean;
  placeholder?: string;
  onSelect?: (option: DropdownOption) => void;
};

export default function Dropdown({
  options,
  showFirstOption = false,
  placeholder = "Choose option",
  onSelect,
}: Props) {
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null,
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function handleOptionClick(option: string | number) {
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
      <span className="dropdown-toggle">{selectedOption ?? placeholder}</span>
      {active && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
