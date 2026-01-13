import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button, ButtonGroup } from '@mui/material';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  const [filter, setFilter] = useState('all'); // 'all', 'inStock', 'outOfStock'

  const handleRemoveProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  // Filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // 'all'
  });

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      <ButtonGroup variant="contained" style={{ marginBottom: '20px' }}>
        <Button 
          onClick={() => setFilter('all')}
          color={filter === 'all' ? 'primary' : 'inherit'}
        >
          All Products
        </Button>
        <Button 
          onClick={() => setFilter('inStock')}
          color={filter === 'inStock' ? 'primary' : 'inherit'}
        >
          In Stock
        </Button>
        <Button 
          onClick={() => setFilter('outOfStock')}
          color={filter === 'outOfStock' ? 'primary' : 'inherit'}
        >
          Out of Stock
        </Button>
      </ButtonGroup>

      <ProductList products={filteredProducts} onRemoveProduct={handleRemoveProduct} />
    </div>
  );
}

export default App;
