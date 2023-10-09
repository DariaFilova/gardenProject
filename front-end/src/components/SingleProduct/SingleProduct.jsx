import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../store/slices/ProductsSlice';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './SingleProduct.scss';
import { addProductToCart } from '../../store/slices/CartSlice';

const SingleProduct = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const serverDomain = 'http://localhost:3333';

  useEffect(() => {
    console.log(productId, 'id');
    dispatch(getSingleProduct(productId));
  }, [productId, dispatch]);

  const singleProduct = useSelector(
    (state) => state.products.currentSingleProduct
  );

  const { id, title, price, discont_price, image, categoryId } =
    singleProduct || {};
  const error = useSelector((state) => state.products.productError);
  const status = useSelector((state) => state.products.productStatus);

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className='singleProduct'>
      <div className='singleProduct__wrapper container'>
        {/* <h3>{singleProduct.title}</h3>
        <div className='singleProduct__image'>
          <img src={'http://localhost:3333/' + singleProduct.img} alt='' />
        </div>
        <div className='singleProduct__info'>{singleProduct.description}</div> */}
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
                </div>

                <button
                  onClick={() => dispatch(addProductToCart(singleProduct))}
                >
                  To cart
                </button>

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
        {/* <h3>{singleProduct.title}</h3>
        <div className='singleProduct__image'>
          <img src={singleProduct.image} alt={singleProduct.description} />
        </div>
        <div className='singleProduct__info'>
  
        </div> */}
      </div>
    </div>
  );
};

export default SingleProduct;

