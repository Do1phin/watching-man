import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import './Dropdown.style.scss';

import ua from '../../../public/images/ua.png';
import ru from '../../../public/images/ru.png';

interface IItem {
  name: string;
  value: string;
  flag: any;
}

const items = [
  {
    name: 'ua',
    value: 'Українська',
    flag: ua,
  },
  {
    name: 'ru',
    value: 'Русский',
    flag: ru,
  },
];


const setLangDataToLocalStorage = (item: IItem): void => {
  if (localStorage.getItem('language-name') !== item.name) {
    localStorage.setItem('language-name', item.name);
    localStorage.setItem('language-value', item.value);
  }
};

const getLangNameFromLocalStorage = (): string | null => {
  if (localStorage.getItem('language-name')) {
    return localStorage.getItem('language-name');
  }
  return 'ua';
};

const getLangValueFromLocalStorage = (): string | null => {
  if (localStorage.getItem('language-value')) {
    return localStorage.getItem('language-value');
  }
  return 'Українська';
};

export const Dropdown = (): JSX.Element => {
  const { i18n } = useTranslation();

  const [isShow, setIsShow] = useState(false);
  const [languageValue, setLanguageValue] = useState(getLangValueFromLocalStorage);
  const [languageName, setLanguageName] = useState(getLangNameFromLocalStorage);
  const dropdownRef = useRef(null);

  const toggleLangBtn = (): void => {
    setIsShow(!isShow);
  };

  const selectItem = (item): void => {
    setLanguageValue(item.value);
    setLanguageName(item.name);
    setLangDataToLocalStorage(item);
    i18n.changeLanguage(item.name);
  };

  const listItems = (items): JSX.Element => {
    return items.map((item: IItem) => (
      <li className='dropdown__item' key={item.value} onClick={() => selectItem(item)}>
        <img
          src={item.flag}
          width='26px'
          height='18px'
          alt='Country flag'
          className='dropdown__flag'
        />
        <p className='dropdown__title'>{item.value}</p>
      </li>
    ));
  };

  return (
    <>
      <div className='dropdown' ref={dropdownRef}>
        <div className='dropdown__btn' onClick={toggleLangBtn}>
          <img
            src={`./images/${languageName}.png`}
            width='26px'
            height='18px'
            alt='Country flag'
            className='dropdown__flag'
          />
          <p className='dropdown__title'>{languageValue}</p>
          <span className='dropdown__arrow'></span>
        </div>

        <div className={`dropdown__wrapper ${isShow ? 'show' : ''}`}>
          <ul className='dropdown__list'>{listItems(items)}</ul>
        </div>
      </div>
    </>
  );
};
