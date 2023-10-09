import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart', //name of the slice
  initialState: {
    cart: [],
    status: null,
    error: null,
  },
  reducers: {
    addProductToCart(state, action) {
      console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },

    removeProductFromCart(state, action) {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;

