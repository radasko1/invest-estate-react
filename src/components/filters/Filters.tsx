import "./Filters.css";
import { useState } from "react";
import { useFilterDispatch } from "../../context/filter.context";
import { EstatePropertyLocationType } from "../../models/estate-property-location.type";
import { NumberRangeModel } from "../../models/number-range.model";
import { PropertyTypeModel } from "../../models/property.model";
import Location from "../location/Location";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import RoomCountFilter from "../room-count-filter/RoomCountFilter";

export default function Filters() {
  const dispatch = useFilterDispatch();
  // TODO use one state for that
  const [propertyType, setPropertyType] = useState<
    PropertyTypeModel | undefined
  >(undefined);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [location, setLocation] = useState<
    EstatePropertyLocationType | undefined
  >(undefined);
  const [roomCount, setRoomCount] = useState<NumberRangeModel | undefined>(
    undefined,
  );

  function handleReset() {
    // @ts-ignore
    dispatch({ type: "RESET" });
    // is this alright?
    setMaxPrice(undefined);
    setMinPrice(undefined);
    setLocation(undefined);
    setPropertyType(undefined);
    setRoomCount(undefined);
  }

  function handleClick() {
    dispatch({
      // @ts-ignore
      type: "SET_FILTER",
      payload: { propertyType, location, roomCount, minPrice, maxPrice },
    });
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
        selectedType={propertyType}
        onSelect={(type) => setPropertyType(type)}
      />
      <Location onSelect={(location) => setLocation(location)} />
      <PriceRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={(price) => setMinPrice(price)}
        onMaxPriceChange={(price) => setMaxPrice(price)}
      />
      <RoomCountFilter
        selectedRoomCount={roomCount}
        onSelect={(value) => setRoomCount(value)}
      />
      <button type="button" className="filters-button" onClick={handleClick}>
        Apply Filters
      </button>
    </div>
  );
}
