import { createSlice } from '@reduxjs/toolkit';

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: initialCart,
    status: null,
    error: null,
  },
  reducers: {
    addProductToCart(state, action) {
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    },
    removeProductFromCart(state, action) {
      const index = state.cart.findIndex(
        (element) => element.id === action.payload
      );

      if (index !== -1) {
        const updatedCart = [
          ...state.cart.slice(0, index),
          ...state.cart.slice(index + 1),
        ];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }

      return state;
    },

    removeAllProductsWithTheSameIdFromCart(state, action) {
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    },

    clearCart(state) {
      localStorage.removeItem('cart');
      return {
        ...state,
        cart: [],
      };
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  removeAllProductsWithTheSameIdFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

