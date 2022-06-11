import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';
import _ from 'lodash';

import './FlagDropdown.style.scss';

import ua from '../../../public/images/ua.png';
import ru from '../../../public/images/ru.png';

import { locales } from '../../../public/locales/locales.ts';

interface ILocale {
  name: string;
  value: string;
  flag: File;
}

const items = [
  {
    flag: ua,
    name: 'ua',
    value: 'Українська',
  },
  {
    flag: ru,
    name: 'ru',
    value: 'Русский',
  },
];

const FlagDropdown = (): JSX.Element => {
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [lang, setLang] = useState<ILocale>(items[0]);

  const toggleLangBtn = (): void => {
    setIsShow(!isShow);
  };

  const changeLang = (item: ILocale): void => {
    setLang(item);
    i18n.changeLanguage(item.name);
  };

  const getLangFromLocalStorage = () => {
    return window.localStorage.getItem('i18nextLng');
  };

  const DropdownItem = (item: ILocale) => {
    return (
      <>
        <img
          src={item.flag}
          width='26px'
          height='18px'
          alt='Country flag'
          className='dropdown__flag'
        />
        <p className='dropdown__title'>{item.value}</p>
      </>
    );
  };

  const listItems = (items: ILocale[]): JSX.Element => {
    return (
      <ul className='dropdown__list'>
        {_.map(items, (item: ILocale) => (
          <li className='dropdown__item' key={item.value} onClick={() => changeLang(item)}>
            {DropdownItem(item)}
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    const savedLang = getLangFromLocalStorage();
    console.log('lan', lang);
    if (savedLang && savedLang !== lang.name) {
      items.map((item) => {
        if (item.name === savedLang) {
          return setLang(item);
        }
      });
    }
  }, [lang]);

  return (
    <>
      <div className='dropdown' ref={dropdownRef}>
        <OutsideClickHandler
          onOutsideClick={() => {
            isShow && toggleLangBtn();
          }}>
          <div className='dropdown__btn' onClick={toggleLangBtn}>
            {DropdownItem(lang)}
            <span className='dropdown__arrow'></span>
          </div>
          <div className={`dropdown__wrapper ${isShow ? 'show' : ''}`}>{listItems(items)}</div>
        </OutsideClickHandler>
      </div>
    </>
  );
};

export { FlagDropdown };
