import "./SearchResult.css";
import { useContext, useState } from "react";
import ResultItem from "../result-item/ResultItem";
import { PropertyContext } from "../context/property.context";
import { PROPERTY_LIST } from "../constants/property-list.constant";

export default function SearchResult() {
  const [selected, setSelected] = useState<string>("");
  const { setProperty } = useContext(PropertyContext);

  function handleClick(id: string) {
    setSelected(id);
    // may be inside ResultItem component
    setProperty(id);
  }

  return (
    <div className="search-result">
      <h2 className="search-result-title">Search results</h2>
      <ul className="search-result-items">
        {PROPERTY_LIST.map((property) => (
          <ResultItem
            {...property}
            key={property.id}
            active={selected === property.id}
            onClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}
