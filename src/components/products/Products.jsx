import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./products.css";
function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');

    setProducts(response.data.products);

    console.log(response.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="products-contain">
      <h1>Our Products</h1>

      {products.map((product) => (
        <div className="products" key={product.id}>
            <img
    src={product.thumbnail}
    alt={product.title}
  />
          <h2>{product.id}</h2>
          <h3>{product.title}</h3>
          <h4>{product.description}</h4>
          <h3>${product.price}</h3>

            <button>View Details</button>

        </div>
      ))}
    </section>
  );
}

export default Products;