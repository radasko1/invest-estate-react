import "./SearchResult.css";
import { useContext, useState } from "react";
import ResultItem from "../result-item/ResultItem";
import { FilterModel } from "../models/filter.type";
import { PropertyContext } from "../context/property.context";
import { PROPERTY_LIST } from "../constants/property-list.constant";

type Props = {
  filter: FilterModel;
};

export default function SearchResult({ filter }: Props) {
  const [selected, setSelected] = useState<string>("");
  const { setProperty } = useContext(PropertyContext);

  function handleClick(id: string) {
    setSelected(id);
    // may be inside ResultItem component
    setProperty(id);
  }

  const filteredList = PROPERTY_LIST.filter((item) => {
    const roomFilter =
      filter.rooms < 0 ? true : item.roomCount === filter.rooms;
    const typeFilter = !filter.type ? true : item.type === filter.type;
    const minRangeFilter = filter.minPrice < 0 ? true : filter.minPrice;
    const maxRangeFilter = filter.maxPrice < 0 ? true : filter.maxPrice;
    return roomFilter && typeFilter && minRangeFilter && maxRangeFilter;
  });

  if (!filteredList.length) {
    return (
      <div className="search-result">
        <h2 className="search-result-title">Search results</h2>
        <p>No items found</p>
      </div>
    );
  }

  return (
    <div className="search-result">
      <h2 className="search-result-title">Search results</h2>
      <ul className="search-result-items">
        {filteredList.map((property) => (
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
