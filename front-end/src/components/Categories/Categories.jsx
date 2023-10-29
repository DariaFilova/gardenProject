import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../features/Loader/Loader';
import CategoryItem from '../CategoryItem/CategoryItem';

import './Categories.scss';
import './media.scss';

const Categories = ({ numberOfCategoriesToDisplay }) => {
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  const categoriesToDisplay = numberOfCategoriesToDisplay
    ? categories.slice(0, numberOfCategoriesToDisplay)
    : categories;

  if (status === 'loading') {
    return <Loader />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className='categories'>
      <div className='categories__wrapper container'>
        <div className='categories__heading'>
          <h2>Categories</h2>
          {numberOfCategoriesToDisplay === undefined ? (
            ''
          ) : (
            <Link to='/categories'>
              <button>All categories </button>
            </Link>
          )}
        </div>

        <div className='categories__content'>
          {categoriesToDisplay.map((category) => (
            <CategoryItem
              key={Math.random()}
              id={category.id}
              title={category.title}
              imageUrl={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

