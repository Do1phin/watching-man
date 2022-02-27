import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.styles.scss';
import { Home } from "../../pages/Home/Home";

export const Header: FC = (): JSX.Element => {
  return (
    <>
      <header className='header'>
        <div className='header__container container'>
          <div className='header__raw'>
            <img
              src='./images/site-logo-transp.png'
              width='70'
              height='40'
              alt='site-logo'
              className='header__logo'
              aria-label='Логотип сайта'
            />

            <nav className='header__nav'>
              <ul className='header__list'>
                <NavLink to='/about'>
                  <li className='header__item'>О проекте</li>
                </NavLink>
                <NavLink to='/organizations'>
                  <li className='header__item'>Организации</li>
                </NavLink>
                <NavLink to='/map'>
                  <li className='header__item'>Карта</li>
                </NavLink>
              </ul>
            </nav>

            <div className='header__map-wrapper map'>
              [mock map block]
            </div>

            <div className='header__cabinet-wrapper cabinet'>
              [mock auth block]
            </div>

            <div className='header__lang-dropdown-wrapper'>
              [mock lng select]
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
