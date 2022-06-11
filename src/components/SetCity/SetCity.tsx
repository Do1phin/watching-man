import { SetCityModal } from './SetCityModal';
import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMyPosition } from '../Map/hooks/useMyPosition';
import { useMyPermission } from './hooks/useMyPermission';

import './SetCity.styles.scss';

const SetCity: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const btnRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { permission } = useMyPermission('geolocation');

  const getMyAddress = () => {
    checkMyLocationPermission();
  };

  const checkMyLocationPermission = () => {
    if (permission.state === 'granted') {
      setIsOpen(true);
    }
  };

  return (
    <>
      <SetCityModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='set-city' onClick={getMyAddress}>
        <img
          src='/images/gps-icon.png'
          alt='Set city icon'
          width='20px'
          height='20px'
          className='set-city__icon'
        />
        <p className='set-city__name' ref={btnRef}>
          {t('header.set-city')}
        </p>
      </div>
    </>
  );
};

export { SetCity };
