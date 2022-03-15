import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import './Dropdown.style.scss';

interface IItem {
  name: string;
  value: string;
}

const items = [
  {
    name: 'ua',
    value: 'Українська',
  },
  {
    name: 'ru',
    value: 'Русский',
  },
];

const setLangToLocalStorage = (language: string): void => {
  console.log(language)
  if (localStorage.getItem('language') !== language) {
    localStorage.setItem('language', language);
  }
};

const getLangFromLocalStorage = (): string | null => {
  if (localStorage.getItem('language')) {
    return localStorage.getItem('language');
  }
  return 'ua';
}

export const Dropdown = (): JSX.Element => {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(getLangFromLocalStorage);
  const [language, setLanguage] = useState(getLangFromLocalStorage);
  const dropdownRef = useRef(null);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };
  const select = (item): void => {
    setIsSelected(item.value);
    setLanguage(item.name);
    setLangToLocalStorage(item.value);
    i18n.changeLanguage(item.name);
  };

  document.addEventListener('click', () => {
    const ref = 1;
    console.log('ref ', dropdownRef);
  })

  const listItems = (items): JSX.Element => {
    return items.map((item: IItem) => (
      <li
        className='dropdown__item'
        key={item.value}
        onClick={() => select(item)}
      >
        <img
          src={`./images/${item.name}.png`}
          width='26px'
          height='18px'
          alt='Country flag'
          className='dropdown__flag'
        />
        <p>{item.value}</p>
      </li>
    ));
  };

  console.log(1111, language, isSelected)


  return (
    <>
      <div className='dropdown' ref={dropdownRef}>
        <div className='dropdown__btn' onClick={toggle}>
          <img
            src={`./images/${language}.png`}
            width='26px'
            height='18px'
            alt='Country flag'
            className='dropdown__flag'
          />
          <p className='dropdown__title'>{isSelected}</p>
          <span className='dropdown__arrow'></span>
        </div>

        <div className={`dropdown__wrapper ${isOpen ? 'active' : 'inactive'}`}>
          <ul className='dropdown__list'>{listItems(items)}</ul>
        </div>
      </div>
    </>
  );
};
