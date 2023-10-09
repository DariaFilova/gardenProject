import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/icons/logo.svg';
import shoppingBagIcon from '../../assets/icons/shopping-bag-icon.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__wrapper container'>
        <div className='header__left'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <Link to='/products'>
            <button className='header__button'>Catalogue</button>
          </Link>
        </div>

        <div className='header__right'>
          <Navigation />
          <div className='header__cart'>
            <Link to='/cart'>
              <img src={shoppingBagIcon} alt='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

