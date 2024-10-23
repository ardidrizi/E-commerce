import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/api/products", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProducts(resp.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Find the best products at the best prices</p>
          <a href="/shop" className="btn-hero">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              price={product.price}
              imgUrl={product.images[0] ?? ""}
            />
          ))}
          {/* ProductCard component will go here */}
          {/* <ProductCard
            name="Product 1"
            price="$29.99"
            imgUrl="https://via.placeholder.com/150"
          />
          <ProductCard
            name="Product 2"
            price="$49.99"
            imgUrl="https://via.placeholder.com/150"
          />
          <ProductCard
            name="Product 3"
            price="$19.99"
            imgUrl="https://via.placeholder.com/150"
          />
          <ProductCard
            name="Product 4"
            price="$59.99"
            imgUrl="https://via.placeholder.com/150"
          /> */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Categories</h2>
        <div className="category-grid">
          <div className="category-item">
            <h3>Electronics</h3>
          </div>
          <div className="category-item">
            <h3>Clothing</h3>
          </div>
          <div className="category-item">
            <h3>Home Appliances</h3>
          </div>
          <div className="category-item">
            <h3>Books</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
