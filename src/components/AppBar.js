import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
// Define some basic styles for the AppBar
const styles = {
  nav: {
    backgroundColor: "#343a40",
    padding: "10px 20px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "left",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

const AppBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const {cart}=useCart();

  console.log(isAuthenticated);
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/products" style={styles.navLink}>
            Products
          </Link>
        </li>
        {!isAuthenticated && (
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>
              About
            </Link>
          </li>
        )}
        <li style={styles.navItem}>
          {isAuthenticated ? (
            <button
              onClick={logout}
              style={{
                ...styles.navLink,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" style={styles.navLink}>
              Login
            </Link>
            
          )}
        </li>
        <li style={styles.navItem}>
          <Link to="/shopping-cart" style={styles.navLink}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
            {cart.length > 0 && (
              <span
                style={{
                  background: "red",
                  color: "white",
                  position: "relative",
                  top: "-10px",
                  right: "-5px",
                  padding: "0 5px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {cart.length}
              </span>
            
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;