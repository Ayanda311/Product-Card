import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Our Products</h1>

      <div className="product-container">

        <ProductCard
          name="Bluetooth Speaker"
          category="Electronics"
          price="₹1,999"
          description="Portable wireless speaker"
          image="https://via.placeholder.com/200"
        />

        <ProductCard
          name="Smart Watch"
          category="Electronics"
          price="₹2,499"
          description="Smart watch with fitness tracking"
          image="https://via.placeholder.com/200"
        />

        <ProductCard
          name="Running Shoes"
          category="Footwear"
          price="₹1,799"
          description="Comfortable shoes for daily running"
          image="https://via.placeholder.com/200"
        />

        <ProductCard
          name="Backpack"
          category="Accessories"
          price="₹999"
          description="Stylish backpack for everyday use"
          image="https://via.placeholder.com/200"
        />

      </div>
    </div>
  );
}

export default App;