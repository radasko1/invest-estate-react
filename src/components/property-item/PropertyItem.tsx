import "./PropertyItem.css";
import { useState } from "react";
import { EstatePropertyModel } from "../../models/estate-property.type";

type Props = {
  propertyData: EstatePropertyModel;
  active: boolean;
  onClick(id: string): void;
};

export default function PropertyItem({
  propertyData: {
    id,
    name,
    mainImage,
    address,
    monthRental,
    roomCount,
    bathroomCount,
    livingSurface,
  },
  active,
  onClick,
}: Props) {
  const [favorite, setFavorite] = useState(false);

  function handleFavorite(event: any) {
    event.stopPropagation();
    setFavorite(!favorite);
  }

  return (
    <div
      className={"property-item" + (active ? " active" : "")}
      onClick={() => onClick(id)}
    >
      <div className="property-item-wrapper">
        <div className="property-item-image">
          <img src={mainImage} alt="House" />
        </div>
        <div className="property-item-content">
          <h3 className="property-item-title">{name}</h3>
          <p className="property-item-street">{address}</p>
          <p className="property-item-rent">
            <span className="money">${monthRental}</span>/month
          </p>
          <div className="property-item-room-info">
            <div className="property-item-info">
              <i className="fas fa-bed"></i>
              <span className="block">{roomCount}</span>
            </div>
            <div className="property-item-info">
              <i className="fas fa-shower"></i>
              <span className="block">{bathroomCount}</span>
            </div>
            <div className="property-item-info">
              <i className="fas fa-expand-arrows-alt"></i>
              <span className="block">{livingSurface}</span>
            </div>
          </div>
        </div>
        <div
          className={"property-item-favorite" + (favorite ? " selected" : "")}
          onClick={handleFavorite}
        >
          <i className="fa fa-heart"></i>
        </div>
      </div>
    </div>
  );
}
