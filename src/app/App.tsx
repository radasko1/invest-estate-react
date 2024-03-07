import React from "react";
import "./App.css";
import Content from "../content/Content";
import Detail from "../detail/Detail";
import Filters from "../filters/Filters";
import Layout from "../layout/Layout";
import Navigation from "../navigation/Navigation";
import SearchResult from "../search-result/SearchResult";

export default function App() {
  return (
    <Layout>
      <Navigation></Navigation>
      <Content>
        <Filters />
        <SearchResult />
        <Detail />
      </Content>
    </Layout>
  );
}
