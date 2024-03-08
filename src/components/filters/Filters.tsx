import "./Filters.css";
import { useState } from "react";
import { INIT_FILTER } from "../../constants/init-filter.constant";
import Location from "../location/Location";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import RoomCountFilter from "../rooms/RoomCountFilter";
import { FilterModel } from "../../models/filter.type";
import { PropertyTypeModel } from "../../models/property.model";

type Props = {
  filter: FilterModel;
  onFilter(filter: FilterModel): void;
};

export default function Filters({ filter: _filter, onFilter }: Props) {
  const [filter, setFilter] = useState<FilterModel>(_filter);

  function handlePropertyTypeClick(type: PropertyTypeModel) {
    setFilter({ ...filter, type });
  }

  function handleRoomFilter(min: number, max: number) {
    setFilter({ ...filter, minRooms: min, maxRooms: max });
  }

  // reducer?
  function handleMinRange(value: number) {
    setFilter({ ...filter, minPrice: value });
  }
  // reducer?
  function handleMaxRange(value: number) {
    setFilter({ ...filter, maxPrice: value });
  }

  function handleFilterReset() {
    setFilter(INIT_FILTER);
    onFilter(INIT_FILTER);
  }

  return (
    <div className="filters">
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        <button
          type="button"
          className="filters-reset-button"
          onClick={handleFilterReset}
        >
          Reset
        </button>
      </div>
      <PropertyType
        activeProperty={filter.type}
        onClick={handlePropertyTypeClick}
      />
      <Location />
      <PriceRange
        priceRange={{ min: filter.minPrice, max: filter.maxPrice }}
        onMinChange={handleMinRange}
        onMaxChange={handleMaxRange}
      />
      <RoomCountFilter rooms={filter.minRooms} onChange={handleRoomFilter} />
      <button
        type="button"
        className="filters-button"
        onClick={() => onFilter(filter)}
      >
        Apply Filters
      </button>
    </div>
  );
}
