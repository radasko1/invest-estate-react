import React, { useState } from "react";
import "./Content.css";
import PropertyDetail from "../property-detail/PropertyDetail";
import Filters from "../filters/Filters";
import PropertyList from "../property-list/PropertyList";
import { FilterProvider } from "../../context/filter.context";

export default function Content() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");

  return (
    <FilterProvider>
      <div className="main-content container">
        <Filters key="app_filter" />
        <PropertyList
          key="app_search_result"
          selectedPropertyId={selectedPropertyId}
          onPropertyClick={(id) => setSelectedPropertyId(id)}
        />
        <PropertyDetail
          key="app_property_detail"
          property={selectedPropertyId}
        />
      </div>
    </FilterProvider>
  );
}
