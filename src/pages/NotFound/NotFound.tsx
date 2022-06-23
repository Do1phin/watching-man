import React, { FC } from 'react';

import './NotFound.styles.scss';

const NotFound: FC = (): JSX.Element => {
  return (
    <div className='not-found__container'>
      <div className='not-found__wrapper'>
        <p className='not-found__title'></p>
        <img
          src='/images/error-404.webp'
          width='540'
          height='450'
          className='not-found__img'
          alt='Image for Page Not Found'
        />
      </div>
    </div>
  );
};

export { NotFound };
