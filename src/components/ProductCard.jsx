function ProductCard({ name, category, price, description, image }) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
      />

      <h2>{name}</h2>
      <p className="category">{category}</p>
      <h3>{price}</h3>
      <p>{description}</p>

      <button>View Product</button>
    </div>
  );
}

export default ProductCard;