import "./SearchResult.css";
import { useEffect } from "react";
import { usePropertyFilter } from "../hooks/usePropertyFilter.hook";
import ResultItem from "../result-item/ResultItem";
import { FilterModel } from "../models/filter.type";
import { PROPERTY_LIST } from "../constants/property-list.constant";

type Props = {
  filter: FilterModel;
  selectedPropertyId: string;
  onPropertyClick(id: string): void;
};

export default function SearchResult({
  filter,
  selectedPropertyId,
  onPropertyClick,
}: Props) {
  const propertyList = usePropertyFilter(filter, PROPERTY_LIST);

  useEffect(() => {
    const propertyId = propertyList.length ? propertyList[0].id : "";
    onPropertyClick(propertyId);
  }, [filter]);

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
              onClick={() => onPropertyClick(property.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
