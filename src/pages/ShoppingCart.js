import React from "react";
import { useCart } from "../context/CartContext";
import ShopNowButton from "../components/ShopNowButton";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart, removeProduct } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const handleDelete = (id)=> {
    removeProduct(id)
;
  };

  console.log("Cart", cart);

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
        <div key={index}>
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
            >
              +
            </button>
          </div>

          <button onClick={() => handleDelete(product.id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <Link
            to="/checkoutPage"
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