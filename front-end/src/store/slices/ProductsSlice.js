import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',

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
  name: 'products',
  initialState: {
    products: [],
    status: null,
    error: null,
    productError: null,
    productStatus: null,
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
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

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })

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

