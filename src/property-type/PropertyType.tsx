import "./PropertyType.css";
import React from "react";

type Props = {
  children: React.ReactNode[];
};

export default function PropertyType({ children }: Props) {
  return (
    <div className="property-type">
      <h3>Property type</h3>
      <ul className="property-type-list">
        {children.map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </ul>
    </div>
  );
}
