import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../Product/Product';
import './Products.scss';

import Modal from '../../features/Modal/Modal';
import { useParams } from 'react-router-dom';
import { getCategoryById } from '../../store/slices/CategoriesSlice';
import Loader from '../../features/Loader/Loader';
import Filter from '../../features/Filter/Filter';

const Products = ({ isOnSale = false, limit = 1000000 }) => {
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const status = useSelector((state) => state.products.status);

  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [showOnSale, setShowOnSale] = useState(false);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [sortByChange, setSortByChange] = useState('default');

  useEffect(() => {
    let filteredProducts = getProductsToDisplay();

    if (categoryId) {
      dispatch(getCategoryById(categoryId));
    }

    setProductsToDisplay(filteredProducts);
  }, [products, minPrice, maxPrice, showOnSale, sortByChange]);

  const closeModal = () => {
    setShowModal(false);
  };

  const categoryName = useSelector((state) =>
    categoryId && state.categories.currentCategory
      ? state.categories.currentCategory.title
      : null
  );

  const getProductsToDisplay = () => {
    let result = products.filter((item) => {
      let isSaleActive = showOnSale || isOnSale;
      let priceCondition = item.price > minPrice && item.price < maxPrice;

      if (isSaleActive) {
        return priceCondition && item.discont_price !== null;
      } else {
        return priceCondition;
      }
    });

    if (categoryId) {
      result = result.filter((item) => item.categoryId === +categoryId);
    }

    if (limit) {
      result = result.slice(0, limit);
    }

    switch (sortByChange) {
      case 'lowestPrice':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'highestPrice':
        result.sort((a, b) => b.price - a.price);
        break;

      default:
    }

    return result === undefined ? [] : result;
  };

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      {!isOnSale && !categoryId ? (
        <h3 className='products__title'>All Products</h3>
      ) : null}
      {isOnSale ? <h3 className='products__title'>Products on Sale</h3> : null}
      {categoryId ? <h3 className='products__title'>{categoryName}</h3> : null}
      {limit === 4 ? null : (
        <Filter
          minPrice={minPrice}
          maxPrice={maxPrice}
          showOnSale={showOnSale}
          sortByChange={sortByChange}
          isOnSale={isOnSale}
          setMinPrice={(value) => setMinPrice(value)}
          setMaxPrice={(value) => setMaxPrice(value)}
          setShowOnSale={(value) => setShowOnSale(value)}
          setSortByChange={(value) => setSortByChange(value)}
        />
      )}
      <div className='products'>
        {productsToDisplay.map((product) => (
          <Product
            key={Math.random()}
            product={product}
            setShowModal={setShowModal}
          />
        ))}
      </div>

      {showModal ? (
        <Modal onClose={() => closeModal()} text='Product added to the cart' />
      ) : null}
    </>
  );
};

export default Products;

