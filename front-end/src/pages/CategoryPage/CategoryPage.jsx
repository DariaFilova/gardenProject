import React from 'react';

import Header from '../../Layout/Header/Header';
import Products from '../../components/Products/Products';
import Footer from '../../Layout/Footer/Footer';

const CategoryPage = ({ isOnSale }) => {
  return (
    <>
      <Header />
      <div className='container'>
        <Products isOnSale={isOnSale} />
      </div>

      <Footer />
    </>
  );
};

export default CategoryPage;

