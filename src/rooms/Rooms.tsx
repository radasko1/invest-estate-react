import "./Rooms.css";
import { useState } from "react";

export default function Rooms() {
  const [choise, setChoise] = useState(null);

  return (
    <div className="rooms">
      <h3>Rooms</h3>
      <div className="rooms-select">
        <div className="rooms-item active">
          <input type="radio" id="one" value="1" name="rooms" />
          <label htmlFor="one">1</label>
        </div>
        <div className="rooms-item">
          <input type="radio" id="two" value="2" name="rooms" />
          <label htmlFor="two">2</label>
        </div>
        <div className="rooms-item">
          <input type="radio" id="three" value="3" name="rooms" />
          <label htmlFor="three">3</label>
        </div>
        <div className="rooms-item">
          <input type="radio" id="four" value="4+" name="rooms" />
          <label htmlFor="four">4+</label>
        </div>
      </div>
    </div>
  );
}
