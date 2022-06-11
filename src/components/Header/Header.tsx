import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FlagDropdown } from '../FlagDropdown/FlagDropdown';

import './Header.styles.scss';

import siteLogo from '../../../public/images/site-logo-transp.png';

export const Header: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <div className='header__raw'>
            <Link to='/'>
              <img
                src={siteLogo}
                width='75'
                height='45'
                alt='site-logo'
                className='header__logo'
                aria-label='Логотип сайта'
              />
            </Link>

            <nav className='header__nav'>
              <ul className='header__list'>
                <li className='header__item'>
                  <NavLink to='/about'>{t('header.about')}</NavLink>
                </li>
                <li className='header__item'>
                  <NavLink to='/organizations'>{t('header.organizations')}</NavLink>
                </li>
                <li className='header__item'>
                  <NavLink to='/issues'>{t('header.issues')}</NavLink>
                </li>
                <li className='header__item'>
                  <NavLink to='/map'>{t('header.map')}</NavLink>
                </li>
              </ul>
            </nav>
            <div className='header__map-wrapper map'>[mock map block]</div>

            <div className='header__cabinet-wrapper cabinet'>[mock auth block]</div>

            <div className='header__lang-dropdown-wrapper'>
              <FlagDropdown />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
