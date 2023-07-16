import React, { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setProducts(null);
      });
  }, [products]);

  return (
    <div id="products">
      {products &&
        products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
    </div>
  );
}

export default App;
