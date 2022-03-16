import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Dropdown } from '../Dropdown/Dropdown';

import './Header.styles.scss';

import siteLogo from '../../../public/images/site-logo-transp.png';

export const Header: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <header className='header'>
        <div className='header__container container'>
          <div className='header__raw'>
            <img
              src={siteLogo}
              width='75'
              height='45'
              alt='site-logo'
              className='header__logo'
              aria-label='Логотип сайта'
            />

            <nav className='header__nav'>
              <ul className='header__list'>
                <NavLink to='/about'>
                  <li className='header__item'>{t('about')}</li>
                </NavLink>
                <NavLink to='/organizations'>
                  <li className='header__item'>{t('organizations')}</li>
                </NavLink>
                <NavLink to='/map'>
                  <li className='header__item'>{t('map')}</li>
                </NavLink>
              </ul>
            </nav>

            <div className='header__map-wrapper map'>[mock map block]</div>

            <div className='header__cabinet-wrapper cabinet'>[mock auth block]</div>

            <div className='header__lang-dropdown-wrapper'>
              <Dropdown />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
