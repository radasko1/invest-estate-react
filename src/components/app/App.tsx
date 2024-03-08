import React from "react";
import "./App.css";
import Content from "../content/Content";
import Layout from "../layout/Layout";
import Navigation from "../navigation/Navigation";

export default function App() {
  return (
    <Layout>
      <Navigation></Navigation>
      <Content></Content>
    </Layout>
  );
}
