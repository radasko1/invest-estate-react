import "./Filters.css";
import { useState } from "react";
import Location from "../location/Location";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import RoomCountFilter from "../rooms/RoomCountFilter";
import { PriceRangeModel } from "../models/price-range.type";
import { PropertyTypeModel } from "../models/property.type";

export default function Filters() {
  const [propertyType, setPropertyType] = useState<PropertyTypeModel>(null);
  const [roomCount, setRoomCount] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<PriceRangeModel>({
    min: 0,
    max: 0,
  });

  function handlePropertyTypeClick(type: PropertyTypeModel) {
    setPropertyType(type);
  }

  function handleRoomFilter(rooms: number) {
    setRoomCount(rooms);
  }

  // reducer?
  function handleMinRange(value: number) {
    setPriceRange({ ...priceRange, min: value });
  }
  // reducer?
  function handleMaxRange(value: number) {
    setPriceRange({ ...priceRange, max: value });
  }

  function handleReset() {
    setPropertyType(null);
    setRoomCount(0);
    setPriceRange({ min: 0, max: 0 });
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
      <PriceRange priceRange={priceRange} onMinChange={handleMinRange} onMaxChange={handleMaxRange} />
      <RoomCountFilter rooms={roomCount} onChange={handleRoomFilter} />
      <button type="button" className="button">
        Apply Filters
      </button>
    </div>
  );
}
