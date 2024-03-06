import "./PriceRange.css";

export default function PriceRange() {
  return (
    <div className="price-range">
      <h3>Price range per hour</h3>
      <div className="price-range-wrapper">
        <div className="price-range-min">
          <span className="price-range-label">Min</span>
          <div className="price-range-value">$500</div>
        </div>
        <div className="price-range-dash">
          <div className="line"></div>
        </div>
        <div className="price-range-max">
          <span className="price-range-label">Max</span>
          <div className="price-range-value">$5000</div>
        </div>
      </div>
    </div>
  );
}
