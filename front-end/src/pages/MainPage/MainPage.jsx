import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './MainPage.scss';
import Promo from '../../components/Promo/Promo';
import Categories from '../../components/Categories/Categories';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import ProductsOnSale from '../../components/ProductsOnSale/ProductsOnSale';
import Footer from '../../components/Footer/Footer';
import Modal from '../../features/Modal/Modal';

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

