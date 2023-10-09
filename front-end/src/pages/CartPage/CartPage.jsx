import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import CartProducts from '../../components/CartProducts/CartProducts';

const CartPage = () => {
  return (
    <>
      <Header />
      <div className='cartPage container'>
        <CartProducts />
        <OrderDetails />
      </div>

      <Footer />
    </>
  );
};

export default CartPage;

