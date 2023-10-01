import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../store/slices/ProductsSlice';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();

  console.log(id, 'id');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);

  const SingleProduct = useSelector(
    (state) => state.products.currentSingleProduct
  );
  const error = useSelector((state) => state.products.productError);
  const loading = useSelector((state) => state.products.productStatus);
  console.log(loading, 'loading');
  console.log(error, 'error');

  console.log(SingleProduct, 'foosingle');

  return (
    <div className='singleProduct'>
      <div className='singleProduct__wrapper container'>
        <h3></h3>
        <div className='singleProduct__image'></div>
        <div className='singleProduct__info'></div>
      </div>
    </div>
  );
};

export default SingleProduct;

