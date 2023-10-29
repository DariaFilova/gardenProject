import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.scss';
import './media.scss';

const Navigation = () => {
  return (
    <>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/'>Main Page</NavLink>
          </li>
          <li>
            <NavLink to='/products'>All products</NavLink>
          </li>
          <li>
            <NavLink to='/sale'>All Sales</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

