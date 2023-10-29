import React from 'react';
import { Link } from 'react-router-dom';

import promoImage from '../../assets/images/promo-image.png';

import './Promo.scss';
import './media.scss';

const Promo = () => {
  return (
    <div className='promo'>
      <div className='promo__wrapper container'>
        <div className='promo__info'>
          <h1>
            Sale <br /> New season{' '}
          </h1>

          <Link to='/sale'>
            <button className='primary'>Sale</button>
          </Link>
        </div>
        <div className='promo__image'>
          <img src={promoImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Promo;

