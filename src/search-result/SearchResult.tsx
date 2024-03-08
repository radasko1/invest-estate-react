import "./SearchResult.css";
import { useEffect, useState } from "react";
import ResultItem from "../result-item/ResultItem";
import { FilterModel } from "../models/filter.type";
import { PROPERTY_LIST } from "../constants/property-list.constant";

type Props = {
  filter: FilterModel;
  onPropertyClick(id: string): void;
};

export default function SearchResult({ filter, onPropertyClick }: Props) {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");
  const [propertyList, setPropertyList] = useState(PROPERTY_LIST);

  useEffect(() => {
    function applyFilters() {
      const filtered = PROPERTY_LIST.filter((property) => {
        const { minRooms, maxRooms, type, minPrice, maxPrice } = filter;
        return (
          (minRooms < 0 || property.roomCount >= minRooms) &&
          (maxRooms < 0 || property.roomCount <= maxRooms) &&
          (!type || property.type === type) &&
          (minPrice < 0 || property.monthRental >= minPrice) &&
          (maxPrice < 0 || property.monthRental <= maxPrice)
        );
      });
      setPropertyList(filtered);
      handlePropertyClick(filtered.length ? filtered[0].id : "");
    }

    applyFilters();
  }, [filter]);

  function handlePropertyClick(id: string) {
    setSelectedPropertyId(id);
    onPropertyClick(id);
  }

  return (
    <div className="search-result">
      <h2 className="search-result-title">Search results</h2>
      {!propertyList.length ? (
        <p>No items found</p>
      ) : (
        <ul className="search-result-items">
          {propertyList.map((property) => (
            <ResultItem
              key={property.id}
              propertyData={property}
              active={selectedPropertyId === property.id}
              onClick={handlePropertyClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
