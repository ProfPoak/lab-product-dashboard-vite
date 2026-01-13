import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}> 
          <ProductCard name={product.name} price={product.price} stock={product.inStock}/>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
