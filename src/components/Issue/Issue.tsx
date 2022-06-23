import React from 'react';
import { Link } from 'react-router-dom';

import './Issue.styles.scss';

const Issue = (props) => {
  const { title, city, description } = props;

  const id = '629a1619ef811a385fcd83c6';

  return (
    <>
      <div className='list__item item'>
        <div className='item__header'>
          <p className='item__city'>{city}</p>
        </div>

        <div className='item__body'>
          <picture className='item__photo'>
            {/*<source srcSet={`/images/issues/${id}/01.webp`} type='image/webp'></source>*/}
            <img
              src='https://img.freepik.com/free-photo/hostomil-reg-ukraine-apr-22-2022-an-unexploded-rocket-of-the-russian-occupying-troops-sticks-out-of-the-road_173948-7894.jpg'
              alt='Фото к обращению'></img>
          </picture>
        </div>

        <div className='item__footer'>
          <Link to={id} state={props}>
            <h3 className='item__title'>{title}</h3>
            <p className='item__description'>{description}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Issue };
