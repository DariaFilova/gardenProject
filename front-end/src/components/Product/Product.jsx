import React from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/slices/CartSlice';

const Product = ({ product, setShowModal }) => {
  const { id, title, price, discont_price, image, categoryId } = product || {};

  const dispatch = useDispatch();

  const serverDomain = 'http://localhost:3333';
  const productLink = `/products/${id}`;

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop the click event from propagating to the parent Link
    dispatch(addProductToCart(product));
    setShowModal(true);
  };

  const calculateDiscount = () => {
    let discount = Math.round(((price - discont_price) / price) * 100);
    return discount;
  };

  return (
    <Link to={productLink} className='product'>
      <div className='product__image'>
        <img src={serverDomain + image} alt='' />
        <button onClick={handleAddToCartClick}>Add to cart</button>
      </div>
      <div className='product__price_info'>
        <div className='product__current-price'>
          {discont_price ? discont_price : price}$
        </div>

        <div className='product__old-price'>
          {discont_price ? price + '$' : null}{' '}
        </div>

        {discont_price && (
          <div className='product__discount'>-{calculateDiscount()}%</div>
        )}
      </div>
      <div className='product__title'>{title}</div>
    </Link>
  );
};

export default Product;

