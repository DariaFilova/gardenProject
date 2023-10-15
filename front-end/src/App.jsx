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
import CartPage from './pages/CartPage/CartPage';

function App() {
  const dispatch = useDispatch();

  // get all proucts when app is initialized
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);
  return (
    <>
      <div className='App'></div>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/products' element={<ProductsPage isOnSale={false} />} />
        <Route path='/sale' element={<ProductsPage isOnSale={true} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:categoryId' element={<ProductsPage />} />
        <Route path='/products/:productId' element={<SingleProductPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      ;
    </>
  );
}

export default App;

