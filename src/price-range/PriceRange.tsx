import "./PriceRange.css";
import { PriceRangeModel } from "../models/price-range.type";

type Props = {
  priceRange: PriceRangeModel;
  onMinChange(value: number): void;
  onMaxChange(value: number): void;
};

export default function PriceRange({
  priceRange,
  onMinChange,
  onMaxChange,
}: Props) {
  // use state in component and pass object?
  function toNumber(value: string) {
    return parseInt(value, 10);
  }

  function handleNegativeValue(value: number) {
    return value < 0 ? 0 : value;
  }

  return (
    <div className="price-range">
      <h3>Price range per month</h3>
      <div className="price-range-wrapper">
        <div className="price-range-min">
          <span className="price-range-label">Min</span>
          <div className="price-range-value">
            <input
              type="number"
              value={handleNegativeValue(priceRange.min)}
              onChange={(event) => onMinChange(toNumber(event.target.value))}
            />
          </div>
        </div>
        <div className="price-range-dash">
          <div className="line"></div>
        </div>
        <div className="price-range-max">
          <span className="price-range-label">Max</span>
          <div className="price-range-value">
            <input
              type="number"
              value={handleNegativeValue(priceRange.max)}
              onChange={(event) => onMaxChange(toNumber(event.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
