import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import CartProducts from '../../components/CartProducts/CartProducts';
import Modal from '../../features/Modal/Modal';

import './CartPage.scss';
import './media.scss';

const CartPage = () => {
  const amountOfProductsInCart = useSelector((state) => state.cart.cart.length);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />

      {showModal ? (
        <Modal onClose={() => closeModal()} text='Thanks for your order!' />
      ) : null}
      <div className='cartPage container'>
        {amountOfProductsInCart > 0 ? (
          <>
            <div className='cartPage__title'>
              <h2>Shopping cart</h2>
              <Link to='/products'>Back to the store {`>`} </Link>
            </div>
            <div className='cartPage__content'>
              <CartProducts />
              <OrderDetails setShowModal={(value) => setShowModal(value)} />
            </div>
          </>
        ) : (
          <div className='cartPage__empty'>
            <h2>Shopping Cart is empty</h2>
            <Link to='/'>Back to the store {`>`} </Link>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CartPage;

