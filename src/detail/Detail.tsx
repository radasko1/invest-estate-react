import "./Detail.css";

type Props = {
  title: string;
  address: string;
  rating: number;
};

export default function Detail({ title, address, rating }: Props) {
  return (
    <div className="detail">
      <div className="detail-images"></div>
      {/**/}
      <div className="detail-row">
        <div className="detail-address">
          <h3 className="detail-title">{title}</h3>
          <div className="detail-address">
            <i className="fas fa-map-marker-alt"></i>
            <span className="detail-address-value">{address}</span>
          </div>
        </div>
        <div className="detail-rating">{rating}</div>
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
