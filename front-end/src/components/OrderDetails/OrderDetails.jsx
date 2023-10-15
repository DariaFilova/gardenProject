import React, { useState } from 'react';
import './OrderDetails.scss';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { clearCart } from '../../store/slices/CartSlice';

const OrderDetails = ({ setShowModal }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');

  const apiUrl = 'http://localhost:3333/order/send';

  const productsInCart = useSelector((state) => state.cart.cart);

  const total = productsInCart.reduce((acc, product) => {
    const productPrice =
      product.discont_price !== null ? product.discont_price : product.price;
    return acc + productPrice;
  }, 0);

  const handlePhoneChange = (value) => {
    console.log(value, 'change');
    setPhone(value);
  };

  const onSubmit = async (data) => {
    const requestData = { productsInCart, total, phone };
    axios
      .post(apiUrl, requestData)
      .then((response) => {
        console.log('POST request successful:', response.data);
        setShowModal(true);
        setValue('phone', '');
        dispatch(clearCart());
      })
      .catch((error) => {
        console.error('POST request error:', error);
      });
  };

  return (
    <div className='orderDetails'>
      <div className='orderDetails__content'>
        <div className='orderDetails__header'>Order details</div>
        <div className='orderDetails__total'>
          <div className='orderDetails__total_text'>Total</div>
          <div className='orderDetails__total_sum'>{total}$</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='orderDetails__phone'>
            <Controller
              name='phone'
              control={control}
              defaultValue=''
              rules={{
                required: 'Phone number is required',
                pattern: {
                  value: /^\+\d{12}$/,
                  message: 'Invalid phone number format',
                },
              }}
              render={({ field }) => (
                <input
                  type='text'
                  {...field}
                  placeholder='+49'
                  onChange={(e) => {
                    field.onChange(e);
                    handlePhoneChange(e.target.value);
                  }}
                  className={errors.phone ? 'red-border' : ''}
                />
              )}
            />
            {errors.phone && (
              <div className='error'>{errors.phone.message}</div>
            )}
          </div>
          <button type='submit' className='orderDetails__button'>
            Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderDetails;

