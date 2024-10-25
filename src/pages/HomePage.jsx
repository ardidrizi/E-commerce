import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Categories from "./Categories";
import { motion } from "framer-motion";
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
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Find the best products at the best prices</p>
          <a href="/shop" className="btn-hero">
            Shop Now
          </a>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="categories"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Categories />
      </motion.section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <motion.div
          className="product-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductCard
                name={product.name}
                price={product.price}
                imgUrl={product.images[0] ?? ""}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;
