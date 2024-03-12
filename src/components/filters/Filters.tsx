import "./Filters.css";
import { useState } from "react";
import Location from "../location/Location";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import RoomCountFilter from "../room-count-filter/RoomCountFilter";
import { INIT_FILTER } from "../../constants/init-filter.constant";
import { FilterModel } from "../../models/filter.model";
import { PropertyTypeModel } from "../../models/property.model";
import { DropdownOptionModel } from "../../models/dropdown-option.model";

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

  function handleLocation(option: DropdownOptionModel) {
    setFilter({ ...filter, location: option });
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
        activeProperty={filter.type ?? null}
        onClick={handlePropertyTypeClick}
      />
      <Location onSelect={handleLocation} />
      <PriceRange
        priceRange={{ min: filter.minPrice ?? -1, max: filter.maxPrice ?? -1}}
        onMinChange={handleMinRange}
        onMaxChange={handleMaxRange}
      />
      <RoomCountFilter rooms={filter.minRooms ?? -1} onChange={handleRoomFilter} />
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
