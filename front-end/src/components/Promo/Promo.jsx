import React from 'react';
import './Promo.scss';
import promoImage from '../../assets/images/promo-image.png';

const Promo = () => {
  return (
    <div className='promo'>
      <div className='promo__wrapper container'>
        <div className='promo__info'>
          <h1>
            Распродажа <br /> в честь нового сезона{' '}
          </h1>
          <div className='promo__buttons'>
            <button className='primary'>Все акции</button>
            <button className='secondary'>Подробнее</button>
          </div>
        </div>
        <div className='promo__image'>
          <img src={promoImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Promo;

