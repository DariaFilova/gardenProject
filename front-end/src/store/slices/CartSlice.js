import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cartSlice = createSlice({
  name: 'cart', //name of the slice
  initialState: {
    cart: [],
    status: null,
    error: null,
  },
  reducers: {
    addProductToCart(state, action) {
      state.cart.push(action.payload);
      console.log(action.payload, 'foo action.payload');
    },

    removeProductFromCart(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    // if this request is pending we add loading status to our state
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;

