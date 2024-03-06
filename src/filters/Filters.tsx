import "./Filters.css";
import { useState } from "react";
import Location from "../location/Location";
import { PropertyTypeModel } from "../models/property.type";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import RoomCountFilter from "../rooms/RoomCountFilter";

export default function Filters() {
  const [propertyType, setPropertyType] = useState<PropertyTypeModel>(null);
  const [roomCount, setRoomCount] = useState<number>(0);

  function handlePropertyTypeClick(type: PropertyTypeModel) {
    setPropertyType(type);
  }

  function handleRoomFilter(rooms: number) {
    setRoomCount(rooms);
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
        onClick={handlePropertyTypeClick}
      />
      <Location />
      <PriceRange />
      <RoomCountFilter rooms={roomCount} onChange={handleRoomFilter} />
    </div>
  );
}
