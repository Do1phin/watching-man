import React, { FC, useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';
import _ from 'lodash';

import './FlagDropdown.style.scss';

import { FlagDropdownItem } from '../FlagDropdown/FlagDropdownItem';

import { locales } from '../../../public/locales/locales.ts';

interface ILocale {
  name: string;
  value: string;
  flag: File;
}

const FlagDropdown: FC = (): JSX.Element => {
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [lang, setLang] = useState<ILocale>(locales[0]);

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

  const listItems = (locales: ILocale[]): JSX.Element => {
    return (
      <ul className='dropdown__list'>
        {_.map(locales, (item: ILocale) => (
          <li className='dropdown__item' key={item.value} onClick={() => changeLang(item)}>
            {FlagDropdownItem(item)}
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    const savedLang = getLangFromLocalStorage();
    if (savedLang && savedLang !== lang.name) {
      locales.map((item) => {
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
            {FlagDropdownItem(lang)}
            <span className='dropdown__arrow'></span>
          </div>
          <div className={`dropdown__wrapper ${isShow ? 'show' : ''}`}>{listItems(locales)}</div>
        </OutsideClickHandler>
      </div>
    </>
  );
};

export { FlagDropdown };
