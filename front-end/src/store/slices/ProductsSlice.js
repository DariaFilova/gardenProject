import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  // if we will pass some data to this function we will use smth instead of _ in first argument
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3333/products/all');

      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/products/${productId}`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products', //name of the slice
  initialState: {
    products: [],
    status: null,
    error: null,
    productError: null,
    productStatus: null,
  },
  reducers: {
    //pass all reducers we will have as objects
    addProduct(state, action) {
      state.products.push(action.payload); //or
      // If we want to add an object. action.payload is smth that we pass to this action as an argument
      // state.products.push({id: Date.now(), title: action.payload, onSale: false})
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    changeOnSaleStatus(state, action) {
      const target = state.products.find(
        (product) => product.id === action.payload
      );
      target.onSale = !target.onSale;
    },
  },

  //extra reduxcer is needed for side effects of async methods, e.g getProducts
  // builder is the object that provides all methoda that we will use for creating all extrareducers
  extraReducers: (builder) => {
    // if this request is pending we add loading status to our state
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      // if this request is fulfilled we add products to our state and change state status to fullfilled
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.productStatus = 'loading';
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.currentSingleProduct = action.payload[0];
        state.productStatus = 'fulfilled';
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.productStatus = 'rejected';
        state.productError = action.payload;
      });
  },
});

export const { addProduct, removeProduct, changeOnSaleStatus } =
  productsSlice.actions;

export default productsSlice.reducer;

