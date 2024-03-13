import "./PropertyList.css";
import { useContext, useEffect } from "react";
import { usePropertyFilter } from "../../hooks/usePropertyFilter.hook";
import PropertyItem from "../property-item/PropertyItem";
import { FilterContext } from "../../context/filter.context";
import { PROPERTY_LIST } from "../../constants/property-list.constant";

type Props = {
  selectedPropertyId: string;
  onPropertyClick(id: string): void;
};

export default function PropertyList({
  selectedPropertyId,
  onPropertyClick,
}: Props) {
  // TODO filterContext
  const filter = useContext(FilterContext);
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
