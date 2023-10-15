import React, { useEffect, useState } from 'react';
import './CartProducts.scss';
import { useDispatch, useSelector } from 'react-redux';

import ProductOnCart from '../ProductOnCart/ProductOnCart';

const CartProducts = () => {
  const productsInCart = useSelector((state) => state.cart.cart);
  const [productsGroupedById, setProductsGroupedById] = useState([]);

  useEffect(() => {
    setProductsGroupedById(Object.groupBy(productsInCart, ({ id }) => id));
  }, [productsInCart]);

  console.log(productsInCart, 'productsInCart');

  return (
    <div className='cartProducts'>
      <div className='cartProducts__wrapper'>
        {Object.keys(productsGroupedById).map((key, index) => (
          <ProductOnCart
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

