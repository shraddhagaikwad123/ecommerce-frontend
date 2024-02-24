import React from "react";
import { useCart } from "../context/CartContext";
import ShopNowButton from "../components/ShopNowButton";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const counterButtonStyle = {
  margin: "10px",
  padding: "4px 8px",
  fontWeight: "bold",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ddd",
  color: "#333",
};

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart, removeProduct } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const { isAuthenticated } = useAuth();

  const handleDelete = (id)=> {
    removeProduct(id)
;
  };

  console.log("Cart", cart);
  console.log("Quantity", quantity);

  return (
    <div>
      <h2>ShoppingCart</h2>

      {cart.length === 0 && (
        <div>
          <p>Your cart is empty</p>
          <ShopNowButton />
        </div>
      )}

      {cart.map((product, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <div style={{ flex: "1 1 150px", marginRight: "20px" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
          </div>
          <div style={{ flex: "2 1 300px" }}>
            <h3>{product.title}</h3>
            <p>price: {product.price}</p>
            <p>quantity: {product.quantity}</p>
            <div>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setQuantity(product.quantity - 1);
                  removeFromCart(product.id);
                }}
                disabled={product.quantity <= 1}
                style={counterButtonStyle}
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setQuantity(product.quantity + 1);
                  addToCart(product, product.quantity);
                }}
                style={counterButtonStyle}
              >
                +
              </button>
            </div>

            <button
              style={{
                cursor: "pointer",
                backgroundColor: "#ff4d4d",
                color: "white",
                margin: "10px",
                padding: "8px 15px",
                borderRadius: "5px",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={() => handleDelete(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <Link
            to={isAuthenticated ? "/checkout" : "/login"}
            style={{
              display: "inline-block",
              background: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;