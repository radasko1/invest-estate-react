import React, { useState } from "react";
import "./Content.css";
import Detail from "../detail/Detail";
import Filters from "../filters/Filters";
import SearchResult from "../search-result/SearchResult";
import { INIT_FILTER } from "../constants/init-filter.constant";
import { FilterModel } from "../models/filter.type";

export default function Content() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");
  const [filter, setFilter] = useState<FilterModel>(INIT_FILTER);

  // PropertyContext may be inside some wrap component which has all context
  // ...also can have many methods and value as Redux Store inside, setProperty, setFilter, setFavorite,...
  return (
    <div className="main-content container">
      <Filters key="app_filter" filter={filter} onFilter={setFilter} />
      <SearchResult
        key="app_search_result"
        filter={filter}
        onPropertyClick={(id) => setSelectedPropertyId(id)}
      />
      <Detail key="app_property_detail" property={selectedPropertyId} />
    </div>
  );
}
