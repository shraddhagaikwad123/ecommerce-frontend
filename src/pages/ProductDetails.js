import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AddToCartButton from "../components/AddToCartButton";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 


  useEffect(() => {
    // Async await
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) throw new Error("Product not found.");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]); // Dependency array includes productId to refetch if it changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  
 

  return product ? (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "3oopx", objectFit: "cover" }}
        />
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            <strong>${product.price}</strong>
          </p>
          <AddToCartButton product={product}/>
        </div>
        
      </div>
    </div>
  ) : null;
};

export default ProductDetails;



