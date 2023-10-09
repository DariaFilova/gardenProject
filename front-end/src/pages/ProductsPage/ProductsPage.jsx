import React from 'react';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';

const ProductsPage = ({ isOnSale }) => {
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

export default ProductsPage;

