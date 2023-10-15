import React, { useState } from 'react';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import Modal from '../../features/Modal/Modal';

const SingleProductPage = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <SingleProduct setShowModal={setShowModal} />
      <Footer />
      {showModal ? (
        <Modal onClose={() => closeModal()} text='Product added to the cart' />
      ) : null}
    </>
  );
};

export default SingleProductPage;

