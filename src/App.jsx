import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
const products = [
{
name: "Bluetooth Speaker",
category: "Electronics",
price: "₹1,999",
description: "Portable wireless speaker with rich, clear sound.",
image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
},
{
name: "Smart Watch",
category: "Electronics",
price: "₹2,499",
description: "Smart watch with fitness tracking and notifications.",
image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
},
{
name: "Running Shoes",
category: "Footwear",
price: "₹1,799",
description: "Lightweight and comfortable shoes for everyday running.",
image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
},
{
name: "Travel Backpack",
category: "Accessories",
price: "₹999",
description: "Stylish and durable backpack for work, travel and college.",
image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
},
{
name: "Wireless Headphones",
category: "Electronics",
price: "₹3,499",
description: "Comfortable wireless headphones with immersive audio.",
image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
},
{
name: "Classic Sunglasses",
category: "Fashion",
price: "₹899",
description: "Modern sunglasses with a stylish everyday design.",
image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
},
{
name: "Leather Wallet",
category: "Accessories",
price: "₹699",
description: "Compact wallet with a premium and timeless finish.",
image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
},
{
name: "Coffee Maker",
category: "Home",
price: "₹4,299",
description: "Easy-to-use coffee maker for delicious coffee at home.",
image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
},
];

return ( <div className="app"> <header className="hero"> <div className="hero-content"> <span className="eyebrow">WELCOME TO OUR STORE</span> <h1>Find Something <span>You’ll Love</span></h1> <p>
Discover quality products carefully selected for your everyday
lifestyle. </p>

```
      <div className="hero-stats">
        <div>
          <strong>8+</strong>
          <span>Products</span>
        </div>
        <div>
          <strong>4</strong>
          <span>Categories</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Quality</span>
        </div>
      </div>
    </div>
  </header>

  <main className="products-section">
    <div className="section-heading">
      <div>
        <span className="section-label">OUR COLLECTION</span>
        <h2>Featured Products</h2>
      </div>

      <p>
        Browse our collection and find the perfect product for you.
      </p>
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
  </main>

  <footer className="footer">
    <p>© 2026 ProductCard. Quality products, made simple.</p>
  </footer>
</div>
```

);
}

export default App;
