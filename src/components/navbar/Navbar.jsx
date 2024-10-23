import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality (e.g., redirect to search results page or filter products)
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">E-Shop</a>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-links">
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/deals">Deals</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <form className="navbar-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
          <button type="submit">
            <i className="fa fa-search">Search</i>
          </button>
        </form>

        <div className="navbar-icons">
          <a href="/wishlist">
            <i className="fa fa-heart"></i>
          </a>
          <a href="/account">
            <i className="fa fa-user"></i>
          </a>
          <a href="/cart">
            <i className="fa fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
