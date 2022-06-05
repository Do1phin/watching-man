import React from 'react';
import { Link } from 'react-router-dom';

import './Issue.styles.scss';

const Issue = (props) => {
  const { title, city, description, id } = props;

  return (
    <>
      <div className='list__item item'>
        <div className='item__header'>
          <p className='item__city'>{city}</p>
        </div>

        <div className='item__body'>
          <picture className='item__photo'>
            <source srcSet='/images/issues/31337/01.webp' type='image/webp'></source>
            <img src='/images/issues/31337/01.jpeg' alt='Фото-факт проблемы'></img>
          </picture>
        </div>

        <div className='item__footer'>
          <Link to={id}>
            <h3 className='item__title'>{title}</h3>
            <p className='item__description'>{description}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Issue };
