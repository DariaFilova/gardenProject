import React from 'react';
import Header from '../../components/Header/Header';
import './MainPage.scss';
import Promo from '../../components/Promo/Promo';
import Categories from '../../components/Categories/Categories';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import ProductsOnSale from '../../components/ProductsOnSale/ProductsOnSale';
import Footer from '../../components/Footer/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Promo />
      <Categories numberOfCategoriesToDisplay={4} />
      <DiscountForm />
      <ProductsOnSale />
      <Footer />
    </div>
  );
};

export default MainPage;

