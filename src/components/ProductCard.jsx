function ProductCard({
  name,
  category,
  price,
  description,
  image,
}) {
  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-image-container">
        <img
          className="product-image"
          src={image}
          alt={name}
        />

        <span className="category-badge">
          {category}
        </span>

        <button
          className="favorite-button"
          aria-label={`Add ${name} to favorites`}
        >
          ♡
        </button>
      </div>

      {/* Product Information */}
      <div className="product-info">

        <span className="product-category">
          {category.toUpperCase()}
        </span>

        <h2>{name}</h2>

        <p>{description}</p>

        <div className="product-bottom">

          <div className="price-container">
            <span className="price-label">PRICE</span>
            <span className="price">{price}</span>
          </div>

          <button className="view-button">
            View Product
            <span>→</span>
          </button>

        </div>

      </div>
    </article>
  );
}

export default ProductCard;
