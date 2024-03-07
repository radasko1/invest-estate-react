import React, { useState } from "react";
import "./App.css";
import Content from "../content/Content";
import Detail from "../detail/Detail";
import Filters from "../filters/Filters";
import Layout from "../layout/Layout";
import Navigation from "../navigation/Navigation";
import SearchResult from "../search-result/SearchResult";
import { INIT_FILTER } from "../constants/init-filter.constant";
import { FilterModel } from "../models/filter.type";

export default function App() {
  const [filter, setFilter] = useState<FilterModel>(INIT_FILTER);

  return (
    <Layout>
      <Navigation></Navigation>
      <Content>
        <Filters filter={filter} onFilter={setFilter} />
        <SearchResult filter={filter} />
        <Detail />
      </Content>
    </Layout>
  );
}
