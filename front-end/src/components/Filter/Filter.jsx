import React, { useState } from 'react';
import './Filter.scss';

const Filter = (props) => {
  const {
    minPrice,
    maxPrice,
    showOnSale,
    sortBy,
    onMinPriceChange,
    onMaxPriceChange,
    onShowOnSaleChange,
    onSortByChange,
    onApplyFilters,
  } = props;

  return (
    <div className='filter'>
      {/* Filter inputs */}
      <input
        type='text'
        placeholder='Min Price'
        value={minPrice}
        onChange={(e) => onMinPriceChange(e.target.value)}
      />
      <input
        type='text'
        placeholder='Max Price'
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)}
      />
      <label>
        <input
          type='checkbox'
          checked={showOnSale}
          onChange={() => onShowOnSaleChange(!showOnSale)}
        />
        Show On Sale
      </label>
      <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
        <option value='default'>Default</option>
        <option value='lowestPrice'>Lowest Price</option>
        <option value='highestPrice'>Highest Price</option>
      </select>

      {/* Apply button */}
      <button onClick={onApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;

