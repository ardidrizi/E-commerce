import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/shop" },
  { title: "Categories", path: "categories" },
  // { title: "Deals", path: "deals" },
  { title: "About Us", path: "about-us" },
  // { title: "Contact", path: "contact" },
];

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
          <Link to="/">E-Shop</Link>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-links">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    to={link.path}
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
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
            <i className="fa fa-search"></i>
          </button>
        </form>

        <div className="navbar-icons">
          <Link to="/wishlist">
            <i className="fa fa-heart"></i>
          </Link>
          <Link to="/account">
            <i className="fa fa-user"></i>
          </Link>
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
