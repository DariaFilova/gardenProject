import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import Product from '../Product/Product';
import './Products.scss';
import Filter from '../Filter/Filter';

const Products = ({ isOnSale, limit }) => {
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showOnSale, setShowOnSale] = useState(false);

  const productsOnSale = products.filter(
    (product) => product.discont_price !== null
  );

  let productsToDisplay = isOnSale ? productsOnSale : products;

  if (limit) {
    productsToDisplay = productsToDisplay.slice(0, limit);
  }

  // Apply filters based on minPrice, maxPrice, and showOnSale
  productsToDisplay = productsToDisplay.filter((product) => {
    const price = parseFloat(product.price);

    // Filter by minimum price
    const meetsMinPrice = minPrice === '' || price >= parseFloat(minPrice);

    // Filter by maximum price
    const meetsMaxPrice = maxPrice === '' || price <= parseFloat(maxPrice);

    // Filter by on-sale status
    const meetsOnSale = !showOnSale || product.discont_price !== null;

    return meetsMinPrice && meetsMaxPrice && meetsOnSale;
  });

  console.log(productsToDisplay, 'foo');

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Filter
        minPrice={minPrice}
        maxPrice={maxPrice}
        showOnSale={showOnSale}
        onMinPriceChange={(value) => setMinPrice(value)}
        onMaxPriceChange={(value) => setMaxPrice(value)}
        onShowOnSaleChange={(value) => setShowOnSale(value)}
      />
      <div className='products'>
        {productsToDisplay.map((product) => (
          <Product key={Math.random()} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;

