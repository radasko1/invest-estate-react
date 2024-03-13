import "./Filters.css";
import { useState } from "react";
import { FilterState, useFilterDispatch } from "../../context/filter.context";
import Location from "../location/Location";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import RoomCountFilter from "../room-count-filter/RoomCountFilter";

export default function Filters() {
  const dispatch = useFilterDispatch();
  const [filter, setFilter] = useState<FilterState>({});

  function handleReset() {
    // @ts-ignore
    dispatch({ type: "RESET" });
    setFilter({});
  }

  function handleClick() {
    dispatch({
      // @ts-ignore
      type: "SET_FILTER",
      payload: filter,
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
        selectedType={filter.propertyType}
        onSelect={(propertyType) => setFilter({ ...filter, propertyType })}
      />
      {/* TODO */}
      <Location onSelect={(location) => setFilter({ ...filter, location })} />
      <PriceRange
        minPrice={filter.minPrice}
        maxPrice={filter.maxPrice}
        onMinPriceChange={(minPrice) => setFilter({ ...filter, minPrice })}
        onMaxPriceChange={(maxPrice) => setFilter({ ...filter, maxPrice })}
      />
      <RoomCountFilter
        selectedRoomCount={filter.roomCount}
        onSelect={(roomCount) => setFilter({ ...filter, roomCount })}
      />
      <button type="button" className="filters-button" onClick={handleClick}>
        Apply Filters
      </button>
    </div>
  );
}
