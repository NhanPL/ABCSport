import "./CustomerComment.css";

const CustomerComment = () => {
  return (
    <div className="customer-comment">
      <p className="customer-comment-content">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada
        orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non
        maximus.”
      </p>
      <h4 className="customer-comment-name">Nikky Kimso</h4>
      <div className="customer-comment-role">Customer</div>
    </div>
  );
};

export default CustomerComment;
