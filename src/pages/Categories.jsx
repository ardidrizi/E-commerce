import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        const products = response.data;

        // Extract unique categories from the products
        const uniqueCategories = Array.from(
          new Set(products.map((product) => product.category))
        ).map((category) => ({
          name: category,
          imageUrl: getCategoryImageUrl(category), // Placeholder for category images
        }));

        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        setError("Failed to load categories", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to map category names to placeholder images
  const getCategoryImageUrl = (category) => {
    const categoryImages = {
      Electronics: "https://example.com/images/electronics.jpg",
      Clothing: "https://example.com/images/clothing.jpg",
      "Home & Kitchen": "https://example.com/images/home-kitchen.jpg",
      "Sports & Outdoors": "https://example.com/images/sports-outdoors.jpg",
    };

    return categoryImages[category] || "https://example.com/images/default.jpg";
  };

  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="categories-container">
      <h1 className="categories-title">Shop by Category</h1>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img
              src={category.imageUrl}
              alt={category.name}
              className="category-image"
            />
            <h2 className="category-name">{category.name}</h2>
            <Link to={`/categories/${category.name}`} className="category-link">
              Shop Now
            </Link>
          </div>
        ))}

        <div className="category-card">
          <img
            src="https://example.com/images/default.jpg"
            alt="More categories"
            className="category-image"
          />
          <h2 className="category-name">More Categories</h2>
          <Link to="/categories" className="category-link">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
