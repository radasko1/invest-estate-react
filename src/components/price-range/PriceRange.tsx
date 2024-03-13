import "./PriceRange.css";

export default function PriceRange(props: {
  minPrice: number | undefined;
  maxPrice: number | undefined;
  onMaxPriceChange?: (max: number) => void;
  onMinPriceChange?: (min: number) => void;
}) {
  // use state in component and pass object?
  function toNumber(value: string) {
    return parseInt(value, 10);
  }

  function handleNegativeValue(value: number | undefined) {
    return !value || value < 0 ? 0 : value;
  }

  function handleMinChange(min: number) {
    if (props.onMinPriceChange) {
      props.onMinPriceChange(min);
    }
  }

  function handleMaxChange(max: number) {
    if (props.onMaxPriceChange) {
      props.onMaxPriceChange(max);
    }
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
              value={handleNegativeValue(props.minPrice)}
              onChange={(event) =>
                handleMinChange(toNumber(event.target.value))
              }
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
              value={handleNegativeValue(props.maxPrice)}
              onChange={(event) =>
                handleMaxChange(toNumber(event.target.value))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
