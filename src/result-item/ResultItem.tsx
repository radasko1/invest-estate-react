import "./ResultItem.css";

type Props = {
  title: string;
  image: string;
  street: string;
  rent: number;
  bedroom: number;
  bathroom: number;
  surface: number;
  isActive?: boolean;
};

export default function ResultItem({
  title,
  image,
  street,
  rent,
  bedroom,
  bathroom,
  surface,
  isActive = false,
}: Props) {
  return (
    <div className={"result-item" + (isActive ? " active" : "")}>
      <div className="result-item-wrapper">
        <div className="result-item-image">
          <img src={image} alt="House" />
        </div>
        <div className="result-item-content">
          <h3 className="result-item-title">{title}</h3>
          <p className="result-item-street">{street}</p>
          <p className="result-item-rent">
            <span className="money">${rent}</span>/month
          </p>
          <div className="result-item-room-info">
            <div className="result-item-info">
              <i className="fas fa-bed"></i>
              <span className="block">{bedroom}</span>
            </div>
            <div className="result-item-info">
              <i className="fas fa-shower"></i>
              <span className="block">{bathroom}</span>
            </div>
            <div className="result-item-info">
              <i className="fas fa-expand-arrows-alt"></i>
              <span className="block">{surface}</span>
            </div>
          </div>
        </div>
        <div className="result-item-favorite">
          <i className="fa fa-heart"></i>
        </div>
      </div>
    </div>
  );
}
