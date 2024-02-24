import React from "react";
import ShopNowButton from "../components/ShopNowButton";
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div class="home">
        <h1>Welcome to Our Online Store!</h1>
        <p>Browse our wide selection of products.</p>
        <ShopNowButton />
      </div>
      <div class="advertise">
        <h1>Get 20% Off on clothes</h1>
      </div>
      <Footer/>
    </>
  );
};

export default Home;


