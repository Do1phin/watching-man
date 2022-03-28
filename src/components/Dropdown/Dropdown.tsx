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

export const Dropdown = (): JSX.Element => {
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [lang, setLang] = useState<IItem>(items[0]);

  const toggleLangBtn = (): void => {
    setIsShow(!isShow);
  };

  const changeLang = (item: IItem): void => {
    setLang(item);
    i18n.changeLanguage(item.name);
  };

  const DropdownItem = (item: IItem) => {
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

  const listItems = (items: IItem[]): JSX.Element => {
    return (
      <ul className='dropdown__list'>
        {items.map((item: IItem) => (
          <li className='dropdown__item' key={item.value} onClick={() => changeLang(item)}>
            {DropdownItem(item)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className='dropdown' ref={dropdownRef}>
        <div className='dropdown__btn' onClick={toggleLangBtn}>
          {DropdownItem(lang)}
          <span className='dropdown__arrow'></span>
        </div>
        <div className={`dropdown__wrapper ${isShow ? 'show' : ''}`}>{listItems(items)}</div>
      </div>
    </>
  );
};
