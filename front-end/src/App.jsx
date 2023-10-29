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
import SalePage from './pages/SalePage/SalePage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CategoryPage from './pages/CategoryPage/CategoryPage';

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
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/products' element={<ProductsPage isOnSale={false} />} />
        <Route path='/sale' element={<SalePage isOnSale={true} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:categoryId' element={<CategoryPage />} />
        <Route path='/products/:productId' element={<SingleProductPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

