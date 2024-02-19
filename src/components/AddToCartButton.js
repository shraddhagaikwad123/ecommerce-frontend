import React from "react";
import { useCart } from "../context/CartContext";

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  

  const handleAddToCart = (product,quantity) => {
    console.log("product", product);
    addToCart(product,quantity);
    setQuantity(1);
alert("product added to cart");
  
  };

  return (
    <div>
       <div>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setQuantity(quantity - 1);
                }}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleAddToCart(product,quantity);
        }}
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          padding: 10,
          margin: 2,
          borderRadius: 8,
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;