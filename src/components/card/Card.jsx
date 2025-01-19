/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ image, name, priceOld, priceNew, percent }) => {
  return (
    <div className="card">
      <div className="card-img-group">
        <img src={image} alt="" />
        <span className="card-percent bg-primary text-white">{percent}</span>
      </div>
      <h4 className="card-name">{name}</h4>
      <div className="card-price-old">{priceOld}</div>
      <div className="card-price-new text-primary">{priceNew}</div>
    </div>
  );
};

export default Card;
