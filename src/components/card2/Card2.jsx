/* eslint-disable react/prop-types */
import "./Card2.css";

const Card2 = ({ image, title, time, content }) => {
  return (
    <div className="card2">
      <img src={image} alt={title} />
      <h4 className="card2-title">{title}</h4>
      <div className="card2-time">{time}</div>
      <div className="card2-content">{content}</div>
    </div>
  );
};

export default Card2;
