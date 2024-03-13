import React from "react";
import "./PropertyType.css";
import Property from "../property/Property";
import { PropertyTypeModel } from "../../models/property.model";
import { PropertyTypeList } from "../../constants/property-type.constant";

export default function PropertyType(props: {
  selectedType: PropertyTypeModel | undefined;
  onSelect?: (type: PropertyTypeModel) => void;
}) {
  function handleClick(type: PropertyTypeModel) {
    if (props.onSelect) {
      props.onSelect(type);
    }
  }

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
            isActive={props.selectedType === item.id}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
