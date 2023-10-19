import React, { useState } from 'react';

import Header from '../../Layout/Header/Header';
import ProductDetailed from '../../components/SingleProduct/SingleProduct';
import Modal from '../../features/Modal/Modal';
import Footer from '../../Layout/Footer/Footer';

const SingleProductPage = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <ProductDetailed setShowModal={setShowModal} />
      <Footer />
      {showModal ? (
        <Modal onClose={() => closeModal()} text='Product added to the cart' />
      ) : null}
    </>
  );
};

export default SingleProductPage;

