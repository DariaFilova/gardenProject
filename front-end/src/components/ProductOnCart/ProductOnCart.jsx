import React, { useState } from 'react';
import './ProductOnCart.scss';
import { removeProductFromCart } from '../../store/slices/CartSlice';
import { useDispatch } from 'react-redux';

const ProductOnCart = ({ product }) => {
  const { id, title, price, discont_price, image } = product || {};

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  const serverDomain = 'http://localhost:3333';
  return (
    <div className='productOnCart'>
      <div className='productOnCart__image'>
        <img src={serverDomain + image} alt='title' />
      </div>

      <div className='productOnCart__info'>
        <p>{title}</p>
        <div className='productOnCart__amount'>
          <button>-</button>
          <span>{amount}</span>
          <button>+</button>
        </div>
      </div>

      <div className='productOnCart__price'>
        <div className='productOnCart__current-price'>
          {discont_price ? discont_price : price}$
        </div>
        <div className='productOnCart__old-price'>
          {discont_price ? price + '$' : null}
        </div>
      </div>

      <div
        className='productOnCart__remove'
        onClick={() => dispatch(removeProductFromCart(id))}
      >
        X
      </div>
    </div>
  );
};

export default ProductOnCart;

