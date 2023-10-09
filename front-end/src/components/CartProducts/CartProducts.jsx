import React from 'react';
import './CartProducts.scss';
import { useDispatch, useSelector } from 'react-redux';

import ProductOnCart from '../ProductOnCart/ProductOnCart';

const CartProducts = () => {
  const productsInCart = useSelector((state) => state.cart.cart);
  console.log(productsInCart, 'productsInCart');

  return (
    <div className='cartProducts'>
      <div className='cartProducts__wrapper'>
        {productsInCart.map((product) => (
          <ProductOnCart key={product.id + Math.random()} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartProducts;

