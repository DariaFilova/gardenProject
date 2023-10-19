import React, { useState } from 'react';

import Header from '../../Layout/Header/Header';
import Promo from '../../components/Promo/Promo';
import Categories from '../../components/Categories/Categories';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import ProductsOnSale from '../../components/ProductsOnSale/ProductsOnSale';
import Modal from '../../features/Modal/Modal';
import Footer from '../../Layout/Footer/Footer';

import './MainPage.scss';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Header />
      <Promo />
      <Categories numberOfCategoriesToDisplay={4} />
      <DiscountForm setShowModal={setShowModal} />
      <ProductsOnSale />
      <Footer />

      {showModal ? (
        <Modal
          onClose={() => closeModal()}
          text='Your request for discount was sent!'
        />
      ) : null}
    </div>
  );
};

export default MainPage;

