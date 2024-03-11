import "./RoomCountFilter.css";

type Props = {
  rooms: number;
  onChange(min: number, max: number): void;
};

export default function RoomCountFilter({ rooms, onChange }: Props) {
  return (
    <div className="rooms">
      <h3>Rooms</h3>
      <div className="rooms-select">
        <div className={"rooms-item" + (rooms === 1 ? " active" : "")}>
          <input
            type="radio"
            id="one"
            value="1"
            name="rooms"
            checked={rooms === 1}
            onChange={() => onChange(1,1)}
          />
          <label htmlFor="one">1</label>
        </div>
        <div className={"rooms-item" + (rooms === 2 ? " active" : "")}>
          <input
            type="radio"
            id="two"
            value="2"
            name="rooms"
            checked={rooms === 2}
            onChange={() => onChange(2,2)}
          />
          <label htmlFor="two">2</label>
        </div>
        <div className={"rooms-item" + (rooms === 3 ? " active" : "")}>
          <input
            type="radio"
            id="three"
            value="3"
            name="rooms"
            checked={rooms === 3}
            onChange={() => onChange(3,3)}
          />
          <label htmlFor="three">3</label>
        </div>
        <div className={"rooms-item" + (rooms === 4 ? " active" : "")}>
          <input
            type="radio"
            id="four"
            value="4+"
            name="rooms"
            checked={rooms === 4}
            onChange={() => onChange(4,-1)}
          />
          <label htmlFor="four">4+</label>
        </div>
      </div>
    </div>
  );
}
