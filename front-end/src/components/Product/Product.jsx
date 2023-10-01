import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import './Product.scss';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/slices/CartSlice';

const Product = ({ product }) => {
  const { id, title, price, discont_price, image, categoryId } = product || {};

  const dispatch = useDispatch();

  const serverDomain = 'http://localhost:3333';
  const productLink = `/products/${id}`;
  // const { SingleProductId } = useParams();
  // const SingleProduct = useSelector(
  //   (state) => state.SingleProduct.currentSingleProduct
  // );
  // const status = useSelector((state) => state.SingleProduct.status);
  // const error = useSelector((state) => state.SingleProduct.error);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSingleProduct(SingleProductId), [SingleProductId, dispatch]);
  // });

  // products/id

  // getParams -> id

  // getSingleProduct(id)

  return (
    <div className='product'>
      <div className='product__image'>
        <img src={serverDomain + image} alt='' />
        <button onClick={() => dispatch(addProductToCart(product))}>
          Add to cart
        </button>
      </div>
      <div className='product__price_info'>
        {discont_price && (
          <div className='product__discount_price'>{discont_price} &euro;</div>
        )}
        <div className='product__price'>{price} &euro;</div>
      </div>
      <div className='product__title'>{title}</div>
      <Link to={productLink}>More info</Link>
    </div>
  );
};

export default Product;

