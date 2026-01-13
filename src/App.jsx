import React, { useState } from 'react';
import ProductList from './components/ProductList';
import {Button} from '@mui/material';

const App = () => {
  const products = [
    {id: '1', name: 'Laptop', price: 400, inStock: true},
    {id: '2', name: 'Tablet', price: 200, inStock: false},
    {id: '3', name: 'Phone', price: 300, inStock: true},
    {id: '4', name: 'Headphones', price: 100, inStock: true},
  ]

  const [showOutOfStock, setShowOutOfStock] = useState(true)

  // TODO: Implement logic to filter products based on availability

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      <Button variant="contained">Add Product</Button>

      <ProductList products={products}/>
      
    </div>
  );
};

export default App;
