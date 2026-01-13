import React from 'react';
import { Button } from '@mui/material';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ name, price, stock, onRemove }) => {
  return (
    <div className={stock ? `${styles.productCard} productCard` : `${styles.outOfStockClass} outOfStockClass`}>
      <>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{stock ? 'In Stock' : 'Out of Stock'}</p>
        <Button variant="contained" color="error" onClick={onRemove}>
          Remove
        </Button>
      </>
    </div>
  );
};

export default ProductCard;