import React from 'react';
import './CategoryItem.scss';
import { Link } from 'react-router-dom';

const CategoryItem = ({ id, title, imageUrl }) => {
  const serverDomain = 'http://localhost:3333';
  const categoryLink = `/categories/${id}`;
  return (
    <Link to={categoryLink} className='categoryItem'>
      <div className='categoryItem__image'>
        <img src={serverDomain + imageUrl} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  );
};

export default CategoryItem;

