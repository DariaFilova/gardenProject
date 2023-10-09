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

  // useEffect(() => {
  //   console.log(productLink);
  // }, []);
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

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to the parent Link
    dispatch(addProductToCart(product));
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
      </div>
      <div className='product__title'>{title}</div>
      {/* <Link to={productLink}>More info</Link> */}
    </Link>
  );
};

export default Product;

