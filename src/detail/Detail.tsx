import "./Detail.css";
import { useContext } from "react";
import { PROPERTY_LIST } from "../constants/property-list.constant";
import { PropertyContext } from "../context/property.context";

export default function Detail() {
  const { property } = useContext(PropertyContext);

  if (!property) {
    return (
      <div className="detail">
        <p>No property selected</p>
      </div>
    );
  }

  const propertyInformation = PROPERTY_LIST.filter(
    (prop) => prop.id === property,
  )[0];

  return (
    <div className="detail">
      <div className="detail-images"></div>
      {/**/}
      <div className="detail-row">
        <div className="detail-address">
          <h3 className="detail-title">{propertyInformation.name}</h3>
          <div className="detail-address">
            <i className="fas fa-map-marker-alt"></i>
            <span className="detail-address-value">
              {propertyInformation.address}
            </span>
          </div>
        </div>
        <div className="detail-rating">{5}</div>
      </div>
      {/*  */}
      <div className="detail-row">
        <div className="detail-row-box">
          <div>Over-night rental:</div>
          <div>
            <span className="money">${propertyInformation.dayRental}</span>
            /night
          </div>
        </div>
        <div className="detail-row-box">
          <div>Week rental:</div>
          <div>
            <span className="money">${propertyInformation.weekRental}</span>
            /night
          </div>
        </div>
        <div className="detail-row-box">
          <div>Month rental:</div>
          <div>
            <span className="money">${propertyInformation.monthRental}</span>
            /night
          </div>
        </div>
      </div>
      {/**/}
      <div className="detail-row justify-start">
        <div className="detail-row-icon-box">
          <i className="fas fa-bed"></i>
          <span className="block">{propertyInformation.roomCount}</span>
        </div>
        <div className="detail-row-icon-box">
          <i className="fas fa-shower"></i>
          <span className="block">{propertyInformation.bathroomCount}</span>
        </div>
        <div className="detail-row-icon-box">
          <i className="fas fa-expand-arrows-alt"></i>
          <span className="block">{propertyInformation.livingSurface}</span>
        </div>
        {propertyInformation.garageSlots > 0 && (
          <div className="detail-row-icon-box">
            <i className="fas fa-car"></i>
            <span className="block">
              {propertyInformation.garageSlots} slots
            </span>
          </div>
        )}
        {propertyInformation.pool && (
          <div className="detail-row-icon-box">
            <i className="fas fa-tint"></i>
            <span className="block">pool</span>
          </div>
        )}
        {propertyInformation.freeWifi && (
          <div className="detail-row-icon-box">
            <i className="fas fa-wifi"></i>
            <span className="block">Free</span>
          </div>
        )}
        {propertyInformation.airConditioner && (
          <div className="detail-row-icon-box">
            <i className="fas fa-temperature-low"></i>
            <span className="block">Air Conditioner</span>
          </div>
        )}
      </div>
    </div>
  );
}
