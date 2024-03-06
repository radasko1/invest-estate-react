import "./Filters.css";
import { useState } from "react";
import Location from "../location/Location";
import { PropertyTypeModel } from "../models/property.type";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import Rooms from "../rooms/Rooms";

export default function Filters() {
  const [propertyType, setPropertyType] = useState<PropertyTypeModel>(null);

  function handlePropertyClick(type: PropertyTypeModel) {
    console.log("clicked:", type);
    setPropertyType(type);
  }

  function handleReset() {
    setPropertyType(null);
  }

  return (
    <div className="filters">
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        <button type="button" className="filters-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <PropertyType
        activeProperty={propertyType}
        onPropertyClick={handlePropertyClick}
      />
      <Location />
      <PriceRange />
      <Rooms />
    </div>
  );
}
