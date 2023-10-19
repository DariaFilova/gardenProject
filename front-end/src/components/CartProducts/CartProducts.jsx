import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ProductInCart from '../ProductInCart/ProductInCart';

import './CartProducts.scss';

const CartProducts = () => {
  const productsInCart = useSelector((state) => state.cart.cart);
  const [productsGroupedById, setProductsGroupedById] = useState([]);

  useEffect(() => {
    setProductsGroupedById(Object.groupBy(productsInCart, ({ id }) => id));
  }, [productsInCart]);

  return (
    <div className='cartProducts'>
      <div className='cartProducts__wrapper'>
        {Object.keys(productsGroupedById).map((key, index) => (
          <ProductInCart
            key={productsGroupedById[key][0].id + Math.random()}
            product={productsGroupedById[key][0]}
            amount={productsGroupedById[key].length}
          />
        ))}
      </div>
    </div>
  );
};

export default CartProducts;

