import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

import { SetCityModal } from '../index';

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
        <svg
          className={cx(
            'set-city__icon',
            { success: permission.state === 'granted' },
            { denied: permission.state === 'denied' },
          )}
          height='100%'
          version='1.1'
          viewBox='0 0 22 22'
          width='100%'>
          <title />
          <desc />
          <defs />
          <g id='Page-1' stroke='none'>
            <g id='Icons-Device' transform='translate(-43.000000, -83.000000)'>
              <g id='gps-fixed' transform='translate(43.000000, 83.000000)'>
                <path
                  d='M11,7 C8.8,7 7,8.8 7,11 C7,13.2 8.8,15 11,15 C13.2,15 15,13.2 15,11 C15,8.8 13.2,7 11,7 L11,7 Z M19.9,10 C19.4,5.8 16.1,2.5 12,2.1 L12,0 L10,0 L10,2.1 C5.8,2.5 2.5,5.8 2.1,10 L0,10 L0,12 L2.1,12 C2.6,16.2 5.9,19.5 10,19.9 L10,22 L12,22 L12,19.9 C16.2,19.4 19.5,16.1 19.9,12 L22,12 L22,10 L19.9,10 L19.9,10 Z M11,18 C7.1,18 4,14.9 4,11 C4,7.1 7.1,4 11,4 C14.9,4 18,7.1 18,11 C18,14.9 14.9,18 11,18 L11,18 Z'
                  id='Shape'
                />
              </g>
            </g>
          </g>
        </svg>
        <p className='set-city__name'>{locality ? locality : t('header.set-city')}</p>
      </div>
    </>
  );
};

export { SetCity };
