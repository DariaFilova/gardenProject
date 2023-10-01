import { useDispatch } from 'react-redux';
import './App.scss';
import { useEffect } from 'react';
import { getProducts } from './store/slices/ProductsSlice';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { getCategories } from './store/slices/CategoriesSlice';

function App() {
  const dispatch = useDispatch();

  // get all proucts when app is initialized
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  });
  return (
    <>
      <div className='App'></div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* Unclear, there is no all products in figma maket */}
        {/* <Route path='/products' element={<div>Products</div>} /> */}
        {/* <Route path='/products/:productId' element={<SingleProduct />} /> */}

        <Route path='/products' element={<ProductsPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:id' element={<ProductsPage />} />
        <Route path='/products/:productId' element={<SingleProductPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      ;
    </>
  );
}

export default App;

