import React from "react";
import "./PropertyType.css";
import Property from "../property/Property";
import { PropertyTypeList } from "../../constants/property-type.constant";
import { PropertyTypeModel } from "../../models/property.model";

type Props = {
  activeProperty: PropertyTypeModel;
  onClick(type: PropertyTypeModel): void;
};

export default function PropertyType({
  activeProperty,
  onClick,
}: Props) {
  return (
    <div className="property-type">
      <h3>Property type</h3>
      <ul className="property-type-list">
        {PropertyTypeList.map((item) => (
          <Property
            key={item.id}
            id={item.id}
            icon={item.icon}
            name={item.name}
            isActive={activeProperty === item.id}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}