import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <nav className='nav'>
        <ul>
          <li>
            <Link to='/'>Main Page</Link>
          </li>
          <li>
            <Link to='/categories'>Categories</Link>
          </li>
          <li>
            <Link to='/sale'>All Sales</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

