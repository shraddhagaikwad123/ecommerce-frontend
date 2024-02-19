import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AppBar from "./components/AppBar";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import About from "./pages/About";
import { AuthProvider } from "./context/AuthContext";
import ShoppingCart from "./pages/ShoppingCart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <CartProvider>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />

        </Routes>
      </Router>
      </CartProvider>
      </AuthProvider>
      
    </div>
  );
}

export default App;