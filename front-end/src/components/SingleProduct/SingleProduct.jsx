import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSingleProduct } from '../../store/slices/ProductsSlice';
import { addProductToCart } from '../../store/slices/CartSlice';
import Loader from '../../features/Loader/Loader';

import './SingleProduct.scss';
import './media.scss';

const SingleProduct = ({ setShowModal }) => {
  const serverDomain = 'http://localhost:3333';

  const { productId } = useParams();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.products.productError);
  const status = useSelector((state) => state.products.productStatus);

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [productId, dispatch]);

  const singleProduct = useSelector(
    (state) => state.products.currentSingleProduct
  );

  const { title, price, discont_price, image } = singleProduct || {};

  const calculateDiscount = () => {
    let discount = Math.round(((price - discont_price) / price) * 100);
    return discount;
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(singleProduct));
    setShowModal(true);
  };

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className='singleProduct'>
      <div className='singleProduct__wrapper container'>
        {singleProduct && (
          <>
            <h3 className='singleProduct__title'>{title}</h3>
            <div className='singleProduct__content'>
              <div className='singleProduct__image'>
                <img src={serverDomain + image} alt='' />
              </div>
              <div className='singleProduct__info'>
                <div className='singleProduct__price'>
                  <div className='singleProduct__current-price'>
                    {discont_price ? discont_price : price}$
                  </div>
                  <div className='singleProduct__old-price'>
                    {discont_price ? price + '$' : null}
                  </div>
                  {discont_price && (
                    <div className='singleProduct__discount'>
                      -{calculateDiscount()}%
                    </div>
                  )}
                </div>

                <button onClick={handleAddToCart}>To cart</button>

                <div className='singleProduct__divider'></div>

                <div className='singleProduct__description'>
                  <div className='singleProduct__description_title'>
                    Description
                  </div>
                  <div className='singleProduct__description_text'>
                    {singleProduct.description}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;

