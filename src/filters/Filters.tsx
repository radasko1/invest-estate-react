import "./Filters.css";
import { useState } from "react";
import Location from "../location/Location";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import RoomCountFilter from "../rooms/RoomCountFilter";
import { PriceRangeModel } from "../models/price-range.type";
import { PropertyTypeModel } from "../models/property.type";

const INITIAL_PROPERTY_TYPE = null;
const INITIAL_ROOM_COUNT = 0;
const INITIAL_PRICE_RANGE: PriceRangeModel = { min: 0, max: 0 };

export default function Filters() {
  const [propertyType, setPropertyType] = useState<PropertyTypeModel>(
    INITIAL_PROPERTY_TYPE,
  );
  const [roomCount, setRoomCount] = useState<number>(INITIAL_ROOM_COUNT);
  const [priceRange, setPriceRange] =
    useState<PriceRangeModel>(INITIAL_PRICE_RANGE);

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

  function handleFilter() {
    //
  }

  function handleReset() {
    setPropertyType(INITIAL_PROPERTY_TYPE);
    setRoomCount(INITIAL_ROOM_COUNT);
    setPriceRange(INITIAL_PRICE_RANGE);
  }

  return (
    <div className="filters">
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        <button
          type="button"
          className="filters-reset-button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <PropertyType
        activeProperty={propertyType}
        onClick={handlePropertyTypeClick}
      />
      <Location />
      <PriceRange
        priceRange={priceRange}
        onMinChange={handleMinRange}
        onMaxChange={handleMaxRange}
      />
      <RoomCountFilter rooms={roomCount} onChange={handleRoomFilter} />
      <button type="button" className="filters-button" onClick={handleFilter}>
        Apply Filters
      </button>
    </div>
  );
}
