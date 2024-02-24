import React from "react";
import CheckoutStepper from "../components/CheckoutStepper";
import { useAuth } from "../context/AuthContext";
import ShopNowButton from "../components/ShopNowButton";

const CheckoutPage = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <div>
      <h1>Checkout</h1>
      <CheckoutStepper />
    </div>
  ) : (
    <div>
      <h2>You are logged out</h2>
      <h3>Please add some products to your cart</h3>
      <ShopNowButton />
    </div>
  );
};

export default CheckoutPage;