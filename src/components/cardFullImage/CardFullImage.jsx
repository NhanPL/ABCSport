import "./CardFullImage.css";

// eslint-disable-next-line react/prop-types
const CardFullImage = ({ image, title, desc }) => {
  return (
    <div className="card-full-image">
      <img className="card-img" src={image} alt={title} />
      <div className="card-title">{title}</div>
      <div className="card-content">{desc}</div>
    </div>
  );
};

export default CardFullImage;
