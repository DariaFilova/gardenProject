import React from 'react';

import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';

import NotFoundImage from '../../assets/images/not-found.svg';

import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className='not-found'>
        <img src={NotFoundImage} alt='' />
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;

