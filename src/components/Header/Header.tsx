import React, { FC, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { debounce } from 'lodash';

import './Header.styles.scss';

import { FlagDropdown, SetCity } from '../index';

import siteLogoImg from '/public/images/site-logo-transp.png';

export const Header: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const toggleOpenBurger = () => {
    return setOpen(!isOpen);
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 400);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  useEffect(() => {
    if (dimensions.width > 970) {
      setOpen(false);
    }
  }, [dimensions.width]);

  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <div className='header__raw'>
            <Link to='/'>
              <img
                src={siteLogoImg}
                width='75'
                height='45'
                alt='site-logo'
                className='header__logo'
                aria-label='Логотип сайта'
              />
            </Link>

            <div className={cx('header__burger burger', { open: isOpen })}>
              <div className='burger__background'></div>
              <div className='burger-icon__wrapper' onClick={toggleOpenBurger}>
                <span className='burger-icon__bar'></span>
                <span className='burger-icon__bar'></span>
                <span className='burger-icon__bar'></span>
              </div>
            </div>

            <nav className={cx('header__nav', { open: isOpen })} onClick={toggleOpenBurger}>
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
            <div className='header__map-wrapper map'>
              <SetCity />
            </div>

            <div className='header__cabinet-wrapper cabinet'>[authorization block]</div>

            <div className='header__lang-dropdown-wrapper'>
              <FlagDropdown />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
