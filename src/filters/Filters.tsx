import "./Filters.css";
import { useState } from "react";
import Location from "../location/Location";
import {
  APARTMENT_PROPERTY,
  COMMERCIAL_PROPERTY,
  HOUSE_PROPERTY,
  LAND_PLOT_PROPERTY,
  PropertyModel,
} from "../models/property.type";
import PriceRange from "../price-range/PriceRange";
import PropertyType from "../property-type/PropertyType";
import Property from "../property/Property";
import Rooms from "../rooms/Rooms";

export default function Filters() {
  const [propertyType, setPropertyType] = useState<PropertyModel>(null);

  function handlePropertyClick(type: PropertyModel) {
    setPropertyType(type);
  }

  return (
    <div className="filters">
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        <button type="button" className="filters-button">
          Reset
        </button>
      </div>
      <PropertyType>
        <Property
          key={HOUSE_PROPERTY}
          icon="fas fa-home"
          name={HOUSE_PROPERTY}
          isActive={true}
        />
        <Property
          key={APARTMENT_PROPERTY}
          icon="far fa-building"
          name={APARTMENT_PROPERTY}
          isActive={false}
        />
        <Property
          key={COMMERCIAL_PROPERTY}
          icon="fas fa-suitcase"
          name={COMMERCIAL_PROPERTY}
          isActive={false}
        />
        <Property
          key={LAND_PLOT_PROPERTY}
          icon="fas fa-th-large"
          name="Land plot"
          isActive={false}
        />
      </PropertyType>
      <Location />
      <PriceRange />
      <Rooms />
    </div>
  );
}
