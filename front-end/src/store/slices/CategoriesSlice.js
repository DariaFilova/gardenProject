import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3333/categories/all`);
      const data = await response.data;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategoryById = createAsyncThunk(
  'products/getCategoryById',
  async (categoryId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/categories/${categoryId}`
      );

      console.log(response);
      const data = await response.data.category;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const categoriesSlice = createSlice({
  name: 'categories', //name of the slice
  initialState: {
    categories: [],
    currentCategory: {},
    status: null,
    error: null,
    categoryStatus: null,
    categoryError: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    // if this request is pending we add loading status to our state
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
    builder
      .addCase(getCategoryById.pending, (state) => {
        state.categoryStatus = 'loading';
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.currentCategory = action.payload;
        state.categoryStatus = 'fulfilled';
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.categoryStatus = 'rejected';
        state.categoryError = action.payload;
      });
  },
});

export default categoriesSlice.reducer;

