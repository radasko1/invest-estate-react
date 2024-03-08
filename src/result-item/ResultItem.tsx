import "./ResultItem.css";
import { useState } from "react";
import { EstatePropertyModel } from "../models/estate-property.type";

type Props = {
  propertyData: EstatePropertyModel;
  active: boolean;
  onClick(id: string): void;
};

export default function ResultItem({
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
      className={"result-item" + (active ? " active" : "")}
      onClick={() => onClick(id)}
    >
      <div className="result-item-wrapper">
        <div className="result-item-image">
          <img src={mainImage} alt="House" />
        </div>
        <div className="result-item-content">
          <h3 className="result-item-title">{name}</h3>
          <p className="result-item-street">{address}</p>
          <p className="result-item-rent">
            <span className="money">${monthRental}</span>/month
          </p>
          <div className="result-item-room-info">
            <div className="result-item-info">
              <i className="fas fa-bed"></i>
              <span className="block">{roomCount}</span>
            </div>
            <div className="result-item-info">
              <i className="fas fa-shower"></i>
              <span className="block">{bathroomCount}</span>
            </div>
            <div className="result-item-info">
              <i className="fas fa-expand-arrows-alt"></i>
              <span className="block">{livingSurface}</span>
            </div>
          </div>
        </div>
        <div
          className={"result-item-favorite" + (favorite ? " selected" : "")}
          onClick={handleFavorite}
        >
          <i className="fa fa-heart"></i>
        </div>
      </div>
    </div>
  );
}
