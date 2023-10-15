import React, { useState } from 'react';
import './Filter.scss';

const Filter = (props) => {
  const {
    showOnSale,

    isOnSale,
    setMinPrice,
    setMaxPrice,
    setShowOnSale,
    setSortByChange,
  } = props;

  return (
    <div className='filter'>
      <div className='filter__price_block'>
        <label>
          Price
          <input
            className='filter__price'
            type='text'
            placeholder='Min Price'
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            className='filter__price'
            type='text'
            placeholder='Max Price'
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </div>

      {isOnSale ? null : (
        <div className='filter__sale_block'>
          <label>
            Discounted items
            <input
              className='filter__sale'
              type='checkbox'
              checked={showOnSale}
              onChange={() => setShowOnSale(!showOnSale)}
            />
          </label>
        </div>
      )}

      <div className='filter__sorted_block'>
        <label>
          Sorted
          <select
            className='filter__sorted'
            onChange={(e) => setSortByChange(e.target.value)}
          >
            <option value='default'>Default</option>
            <option value='lowestPrice'>Price low to high</option>
            <option value='highestPrice'>Price high to low</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;

