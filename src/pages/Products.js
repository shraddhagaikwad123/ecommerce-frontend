import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";

const Products = () => {
  const [products, setProducts] = React.useState([]);
 

  useEffect(() => {
    // Fetch products from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // set the products in state
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          style={{ textDecoration: "none", color: "inherit" }}
          
        >
          <div
            style={{
              width: "200px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h3
              style={{
                fontSize: "16px",
                height: "50px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.title}
            </h3>
            <p>${product.price}</p>
           
            <AddToCartButton product={product}  />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;



