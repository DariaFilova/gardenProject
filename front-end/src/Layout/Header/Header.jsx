import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';

import logo from '../../assets/icons/logo.svg';
import shoppingBagIcon from '../../assets/icons/shopping-bag-icon.svg';

import './Header.scss';

const Header = () => {
  const productsInCart = useSelector((state) => state.cart.cart);
  return (
    <div className='header'>
      <div className='header__wrapper container'>
        <div className='header__left'>
          <Link to='/' className='logo'>
            <img src={logo} alt='logo' />
          </Link>
          <Link to='/categories'>
            <button className='header__button'>Catalogue</button>
          </Link>
        </div>

        <div className='header__right'>
          <Navigation />
          <div className='header__cart'>
            <Link to='/cart'>
              <img src={shoppingBagIcon} alt='' />
            </Link>

            {productsInCart.length > 0 ? (
              <span className='header__cart_count'>
                {productsInCart.length}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

