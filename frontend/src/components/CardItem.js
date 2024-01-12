// CardItem.js

import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ to, label, src, name }) => {
  return (
    <li className='cards__item'>
      <Link to={to} className='cards__item__link'>
        <figure className='cards__item__pic-wrap' data-category={label}>
          <img className='cards__item__img' alt={name} src={src} />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{name}</h5>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
