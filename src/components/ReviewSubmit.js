import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


const ReviewSubmit = ({ shippingDetails, paymentDetails, onBack }) => {
  const { cart } = useCart();
  const navigate=useNavigate();

  const handleSubmitOrder = () => {
    alert("Order Submitted");
    console.log("Order submitted:", { shippingDetails, paymentDetails });
    navigate("/products");
  };

  return (
    <div>
      <h2>Review and Submit</h2>
      <div>
        <h3>Shipping Details</h3>
        <p>
          Fullname: {shippingDetails.firstName} {shippingDetails.lastName}
        </p>
        <p>Address: {shippingDetails.address}</p>
        <p>Contact No: {shippingDetails.contactNo}</p>
      </div>
      <div>
        <h3>Payment Details</h3>
        <p>Card Name: {paymentDetails.cardName}</p>
        <p>Card Number: *** *** **** {paymentDetails.cardNumber.slice(-4)}</p>
      </div>

      <div>
        <h3>Cart items</h3>
        {cart.map((product, index) => (
          <div key={index}>
            <h3>{product.title}</h3>
            <p>price: {product.price}</p>
            <p>quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
      <div>
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="button" onClick={handleSubmitOrder}>
          Submit & Buy
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmit;