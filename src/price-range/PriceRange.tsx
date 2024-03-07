import "./PriceRange.css";

type Props = {
  onMinChange(value: number): void;
  onMaxChange(value: number): void;
};

export default function PriceRange({ onMinChange, onMaxChange }: Props) {
  function toNumber(value: string) {
    return parseInt(value, 10);
  }

  return (
    <div className="price-range">
      <h3>Price range per hour</h3>
      <div className="price-range-wrapper">
        <div className="price-range-min">
          <span className="price-range-label">Min</span>
          <div className="price-range-value">
            <input
              type="number"
              placeholder="100"
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
              placeholder="500"
              onChange={(event) => onMaxChange(toNumber(event.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
