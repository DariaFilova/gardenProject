import { createSlice } from '@reduxjs/toolkit';

// Load cart from local storage if available
const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

export const cartSlice = createSlice({
  name: 'cart', //name of the slice
  initialState: {
    cart: initialCart,
    status: null,
    error: null,
  },
  reducers: {
    addProductToCart(state, action) {
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
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
        // Check if the element was found
        const updatedCart = [
          ...state.cart.slice(0, index),
          ...state.cart.slice(index + 1),
        ];
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
        return {
          ...state,
          cart: updatedCart,
        };
      }

      return state; // If the element wasn't found, return the state without changes
    },

    removeAllProductsWithTheSameIdFromCart(state, action) {
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
      return {
        ...state,
        cart: updatedCart,
      };
    },

    clearCart(state) {
      localStorage.removeItem('cart'); // Clear local storage
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

