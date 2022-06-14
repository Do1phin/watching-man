import { SetCityModal } from './SetCityModal';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMyPermission } from './hooks/useMyPermission';

import './SetCity.styles.scss';

const SetCity: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { permission } = useMyPermission('geolocation');
  const [locality, setLocality] = useState<string>('');

  const getMyAddress = () => {
    return checkMyLocationPermission();
  };

  const checkMyLocationPermission = () => {
    if (permission.state === 'granted') {
      return setIsOpen(true);
    }
  };

  return (
    <>
      <SetCityModal isOpen={isOpen} setIsOpen={setIsOpen} setLocality={setLocality} />
      <div className='set-city' onClick={getMyAddress}>
        <img
          src='/images/gps-icon.png'
          alt='Set city icon'
          width='20px'
          height='20px'
          className='set-city__icon'
        />
        <p className='set-city__name'>{locality ? locality : t('header.set-city')}</p>
      </div>
    </>
  );
};

export { SetCity };
