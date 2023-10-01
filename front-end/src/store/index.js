import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/ProductsSlice';
import categoriesReducer from './slices/CategoriesSlice';
import cartReducer from './slices/CartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

