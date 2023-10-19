import React from 'react';

import Products from '../Products/Products';

import './ProductsOnSale.scss';

const ProductsOnSale = () => {
  return (
    <div className='sale'>
      <div className='sale__wrapper container'>
        <h2>Sale</h2>
        <div className='sale__items'>
          <Products isOnSale={true} limit={4} />
        </div>
      </div>
    </div>
  );
};

export default ProductsOnSale;

