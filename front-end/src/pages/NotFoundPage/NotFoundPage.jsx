import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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

