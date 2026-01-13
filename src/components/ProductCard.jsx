import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ name, price, stock }) => {
  return (
    <div className={stock ? styles.productCard : styles.outOfStock}>
      <>
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <p>{stock ? 'In Stock' : 'Out of Stock'}</p>
      </>
    </div>
  );
};

export default ProductCard;