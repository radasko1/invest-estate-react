import "./RoomCountFilter.css";
import { NumberRangeModel } from "../../models/number-range.model";

export default function RoomCountFilter(props: {
  selectedRoomCount?: NumberRangeModel;
  onSelect?: (value: NumberRangeModel) => void;
}) {
  const { selectedRoomCount } = props;

  function handleChange(min: number, max: number) {
    if (props.onSelect) {
      props.onSelect({ min, max });
    }
  }

  return (
    <div className="rooms">
      <h3>Rooms</h3>
      <div className="rooms-select">
        <div
          className={
            "rooms-item" +
            (selectedRoomCount && selectedRoomCount.min === 1 ? " active" : "")
          }
        >
          <input
            type="radio"
            id="one"
            value="1"
            name="rooms"
            onChange={() => handleChange(1, 1)}
          />
          <label htmlFor="one">1</label>
        </div>
        <div
          className={
            "rooms-item" +
            (selectedRoomCount && selectedRoomCount.min === 2 ? " active" : "")
          }
        >
          <input
            type="radio"
            id="two"
            value="2"
            name="rooms"
            onChange={() => handleChange(2, 2)}
          />
          <label htmlFor="two">2</label>
        </div>
        <div
          className={
            "rooms-item" +
            (selectedRoomCount && selectedRoomCount.min === 3 ? " active" : "")
          }
        >
          <input
            type="radio"
            id="three"
            value="3"
            name="rooms"
            onChange={() => handleChange(3, 3)}
          />
          <label htmlFor="three">3</label>
        </div>
        <div
          className={
            "rooms-item" +
            (selectedRoomCount && selectedRoomCount.min === 4 ? " active" : "")
          }
        >
          <input
            type="radio"
            id="four"
            value="4+"
            name="rooms"
            onChange={() => handleChange(4, Number.MAX_VALUE)}
          />
          <label htmlFor="four">4+</label>
        </div>
      </div>
    </div>
  );
}
