

import React from "react";
import { Link } from "react-router-dom";

const ShopNowButton = () => {
  return (
    <div>
      <Link
        to="/products"
        style={{
          display: "inline-block",
          background: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Shop Now
      </Link>
    </div>
  );
};

export default ShopNowButton;


