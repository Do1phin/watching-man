import React, { FC } from 'react';
import './Home.styles.scss';

export const Home: FC = (): JSX.Element => {
  return (
    <section className='home'>
      <div className='home__container'>
        <div className='home__wrapper'>its home page</div>
      </div>
    </section>
  );
};
