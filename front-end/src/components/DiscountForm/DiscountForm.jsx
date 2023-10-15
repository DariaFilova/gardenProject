import React, { useState } from 'react';
import './DiscountForm.scss';
import discountImage from '../../assets/images/discount-image.png';
import { Controller, useForm } from 'react-hook-form';
import './DiscountForm.scss';
import axios from 'axios';

const DiscountForm = ({ setShowModal }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const [phone, setPhone] = useState();
  const apiUrl = 'http://localhost:3333/sale/send';

  const onSubmit = async (data) => {
    axios
      .post(apiUrl, phone)
      .then((response) => {
        console.log('POST request successful:', response.data);
        // setShowModal(true);
        setValue('phone', '');
        setShowModal(true);
      })
      .catch((error) => {
        console.error('POST request error:', error);
      });
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  return (
    <div className='discountForm'>
      <div className='discountForm__wrapper container'>
        <div className='discountForm__image'>
          <img src={discountImage} alt='gnome' />
        </div>
        <div className='discountForm__content'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='discount-input'>
              <span>5% discount</span> <br />
              on the first order
            </label>
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
                  type='tel'
                  {...field}
                  placeholder='+49'
                  id='discount-input'
                  className={errors.phone ? 'red-border' : ''}
                  onChange={(e) => {
                    field.onChange(e);
                    handlePhoneChange(e.target.value);
                  }}
                />
              )}
            />
            {errors.phone && (
              <div className='error'>{errors.phone.message}</div>
            )}
            <button type='submit'>Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;

