import "./Detail.css";
import { useContext } from "react";
import { PROPERTY_LIST } from "../constants/property-list.constant";
import { PropertyContext } from "../context/property.context";

export default function Detail() {
  const {property} = useContext(PropertyContext);
  const propertyInformation = PROPERTY_LIST.filter(
    (prop) => prop.id === property,
  )[0];

  if (!propertyInformation) {
    return <div>no property selected</div>;
  }

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
            <span className="money">$40</span>/night
          </div>
        </div>
        <div className="detail-row-box">
          <div>Week rental:</div>
          <div>
            <span className="money">$70</span>/night
          </div>
        </div>
        <div className="detail-row-box">
          <div>Month rental:</div>
          <div>
            <span className="money">$3200</span>/night
          </div>
        </div>
      </div>
      {/**/}
      <div className="detail-row justify-start">
        <div className="detail-row-icon-box">
          <i className="fas fa-bed"></i>
          <span className="block">4</span>
        </div>
        <div className="detail-row-icon-box">
          <i className="fas fa-shower"></i>
          <span className="block">2</span>
        </div>
        <div className="detail-row-icon-box">
          <i className="fas fa-expand-arrows-alt"></i>
          <span className="block">4</span>
        </div>
        <div className="detail-row-icon-box">
          <i className="fas fa-car"></i>
          <span className="block">1 garage</span>
        </div>
        <div className="detail-row-icon-box">
          <i className="fas fa-tint"></i>
          <span className="block">pool</span>
        </div>
        <div className="detail-row-icon-box">
          <i className="fas fa-wifi"></i>
          <span className="block">Free</span>
        </div>
      </div>
    </div>
  );
}
