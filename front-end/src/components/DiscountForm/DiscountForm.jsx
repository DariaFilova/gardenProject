import React from 'react';
import './DiscountForm.scss';
import discountImage from '../../assets/images/discount-image.png';

const DiscountForm = () => {
  return (
    <div className='discountForm'>
      <div className='discountForm__wrapper container'>
        <div className='discountForm__image'>
          <img src={discountImage} alt='gnome' />
        </div>
        <div className='discountForm__content'>
          <form action=''>
            <label htmlFor='discount-input'>
              <span>5% discount</span> <br />
              for new customers
            </label>
            <input placeholder='+49' type='tel' id='discount-input' />
            <button>Get discount</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;

