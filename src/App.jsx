import ProductCard from "./components/ProductCard";
import "./App.css";

const products = [
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: "₹1,999",
    description: "Portable wireless speaker with rich sound and deep bass.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
  },
  {
    name: "Wireless Headphones",
    category: "Audio",
    price: "₹2,499",
    description: "Comfortable wireless headphones with immersive sound.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  },
  {
    name: "Smart Watch",
    category: "Wearables",
    price: "₹3,999",
    description: "Modern smartwatch with fitness tracking and notifications.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    name: "Travel Backpack",
    category: "Accessories",
    price: "₹1,499",
    description: "Durable everyday backpack with multiple storage compartments.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    price: "₹1,799",
    description: "Lightweight running shoes designed for everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    name: "Classic Sunglasses",
    category: "Fashion",
    price: "₹899",
    description: "Stylish sunglasses with a timeless everyday design.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
  },
  {
    name: "Leather Wallet",
    category: "Accessories",
    price: "₹699",
    description: "Compact premium wallet with a classic leather finish.",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
  },
  {
    name: "Coffee Maker",
    category: "Home",
    price: "₹4,299",
    description: "Simple coffee maker for delicious coffee at home.",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80",
  },
];

function App() {
  return (
    <div className="store">

      {/* Navigation */}
      <header className="navbar">
        <div className="brand">
          <div className="brand-logo">T</div>

          <div>
            <h1>TechStore</h1>
            <span>Modern Store</span>
          </div>
        </div>

        <nav>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </nav>

        <button className="cart-button">
          🛒 Cart
        </button>
      </header>

      {/* Products */}
      <main>
        <section className="products-section" id="products">

          <div className="section-top">
            <div>
              <span className="section-label">OUR COLLECTION</span>
              <h2>Featured Products</h2>
            </div>

            <div className="product-count">
              {products.length} Products
            </div>
          </div>

          <div className="product-container">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                category={product.category}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>

        </section>
      </main>

      <footer>
        <p>© 2026 TechStore. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
