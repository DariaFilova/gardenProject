import React from 'react';
import './ProductOnCart.scss';
import {
  addProductToCart,
  removeAllProductsWithTheSameIdFromCart,
  removeProductFromCart,
} from '../../store/slices/CartSlice';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const ProductOnCart = ({ amount, product }) => {
  const { id, title, price, discont_price, image } = product || {};

  const dispatch = useDispatch();

  const serverDomain = 'http://localhost:3333';
  return (
    <div className='productOnCart'>
      <div className='productOnCart__image'>
        <img src={serverDomain + image} alt='title' />
      </div>

      <div className='productOnCart__info'>
        <p>{title}</p>
        <div className='productOnCart__amount'>
          <button
            disabled={amount === 1}
            onClick={() => dispatch(removeProductFromCart(id))}
          >
            -
          </button>
          <span>{amount}</span>
          <button onClick={() => dispatch(addProductToCart(product))}>+</button>
        </div>
      </div>

      <div className='productOnCart__price'>
        <div className='productOnCart__price_current'>
          {discont_price ? discont_price : price}$
        </div>
        <div className='productOnCart__price_old'>
          {discont_price ? price + '$' : null}
        </div>
      </div>
      <div
        className='productOnCart__remove'
        onClick={() => dispatch(removeAllProductsWithTheSameIdFromCart(id))}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default ProductOnCart;

