import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import "./Shop.css";

const Shop = () => {
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
    <div className="products-section">
      {/* Featured Products Section */}
      <section className="section-featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              price={product.price}
              imgUrl={product.images[0] ?? ""}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
