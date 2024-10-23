import "./ProductCard.css";

const ProductCard = ({ name, price, description, imgUrl }) => {
  return (
    <div className="product-card">
      <img src={imgUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <a href="#" className="btn-product">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;