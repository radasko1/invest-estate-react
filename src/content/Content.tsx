import React, { useState } from "react";
import "./Content.css";
import { PropertyContext } from "../context/property.context";

type Props = {
  children: React.ReactNode[];
};

export default function Content({ children }: Props) {
  const [property, setProperty] = useState<string>(""); // context

  // PropertyContext may be inside some wrap component which has all context
  // ...also can have many methods and value as Redux Store inside, setProperty, setFilter, setFavorite,...
  return (
    <PropertyContext.Provider value={{ property, setProperty }}>
      <div className="main-content container">
        {children.map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </div>
    </PropertyContext.Provider>
  );
}
