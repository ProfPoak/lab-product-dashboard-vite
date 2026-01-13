import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemoveProduct }) => {
  // Check if no products are in stock
  const inStockProducts = products.filter(product => product.inStock);
  const hasNoStock = inStockProducts.length === 0;

  // Check if the product list is empty
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      {hasNoStock && (
        <p>All products are currently out of stock.</p>
      )}

      <>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            name={product.name} 
            price={product.price} 
            stock={product.inStock}
            onRemove={() => onRemoveProduct(product.id)}
          />
        ))}
      </>
    </>
  );
};

export default ProductList;
