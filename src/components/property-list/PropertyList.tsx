import "./PropertyList.css";
import { useEffect } from "react";
import { usePropertyFilter } from "../../hooks/usePropertyFilter.hook";
import PropertyItem from "../property-item/PropertyItem";
import { FilterModel } from "../../models/filter.model";
import { PROPERTY_LIST } from "../../constants/property-list.constant";

type Props = {
  filter: FilterModel;
  selectedPropertyId: string;
  onPropertyClick(id: string): void;
};

export default function PropertyList({
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
    <div className="property-list">
      <h2 className="property-list-title">Search results</h2>
      {!propertyList.length ? (
        <p>No items found</p>
      ) : (
        <ul className="property-list-items">
          {propertyList.map((property) => (
            <PropertyItem
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
