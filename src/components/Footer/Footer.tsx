import React, { FC } from 'react';

import './Footer.styles.scss';

import siteLogoImg from '/public/images/site-logo-transp.png';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__raw'>
          <div className='footer__logo'>
            <img src={siteLogoImg} alt='footer image' />
          </div>
          <div className='footer__copyright'>&#169; 2022</div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
