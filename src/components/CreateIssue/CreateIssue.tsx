import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { debounce, delay } from 'lodash';

import './CreateIssue.styles.scss';

import { Info, Input, Uploader } from '../index';

import { ADD_ISSUE, GET_ALL_ISSUES } from '../../apollo/operations';
import { useLazyQuery, useMutation } from '@apollo/client';

type InfoType = {
  title: string;
  description: string;
};

const CreateIssue: FC = (props): JSX.Element => {
  const { address, setCreateIssueMode } = props;

  const { t } = useTranslation();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [info, setInfo] = useState<InfoType>({ description: '', title: '' });
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  const [addIssue, { data, error, loading }] = useMutation(ADD_ISSUE, {
    variables: {
      data: {
        ...info,
        ...address.coords,
      },
    },
  });

  const debounceAddIssue = useMemo(() => debounce(() => addIssue(), 1000), [addIssue]);

  const handleClickShowBtn = (e) => {
    e.preventDefault();
    setCreateIssueMode(true);
    return setIsShow(true);
  };

  const handleClickSaveBtn = (e) => {
    e.preventDefault();
    debounceAddIssue();
  };

  const handleClickCloseForm = (e) => {
    e.preventDefault();
    setCreateIssueMode(false);
    setIsShow(false);
  };

  const handleClickAddIssueMarker = (e) => {
    e.preventDefault();
  };

  const Success = (): JSX.Element | null => {
    delay(() => setIsVisible(true), 3000);
    return (
      <div className={cx('hook-success', { hide: isVisible })}>
        <p className='hook-success__msg'>{t('apollo.hook-create-issue-created')}</p>
      </div>
    );
  };

  const Loading = (): JSX.Element | null => {
    return (
      <div className={cx('hook-loading', { hide: isVisible })}>
        <p className='hook-loading__msg'>{t('apollo.hook-loading')}</p>
      </div>
    );
  };

  const Error = (): JSX.Element | null => {
    delay(() => setIsVisible(true), 3000);
    return (
      <div className={cx('hook-error', { hide: isVisible })}>
        <p className='hook-error__msg'>
          {t('apollo.hook-error')}
          <br />
          {t('apollo.hook-create-issue-error')}
        </p>
      </div>
    );
  };

  return (
    <>
      <div className='create-issue__container'>
        <button className={cx('create-issue__btn', { hide: isShow })} onClick={handleClickShowBtn}>
          {t('issues.create-issue')}
        </button>
        <div className='create-issue__wrapper'>
          <div className={cx('create-issue__form form', { show: isShow })}>
            <div className='form__wrapper'>
              {loading && <Loading />}
              {error && <Error />}
              {data && <Success />}

              <p className='form__close-btn' onClick={handleClickCloseForm}>
                X
              </p>

              <div className='form__info-wrapper'>
                <div className='form__left-column'>
                  <div className='form__place place'>
                    <div className='place__img'>
                      <svg width='512' height='512' viewBox='0 0 512 512'>
                        <g></g>
                        <path
                          d='M6100.562 12540.611l-24.361 282.215h55.266l-21.125-282.215z'
                          fill='#000000'
                        />
                        <path
                          d='M6150.686 12475.331c0 24.906-20.19 45.097-45.097 45.097s-45.097-20.191-45.097-45.097c0-24.906 20.19-45.097 45.097-45.097 24.907 0 45.097 20.191 45.097 45.097z'
                          fill='#000000'
                        />
                        <path
                          d='M6050.314 12562.914c-28.754-18.79-45.916-50.462-45.916-84.726 0-35.072 17.797-67.154 47.606-85.811l-10.864-17.357c-35.84 22.425-57.231 60.989-57.231 103.168 0 41.195 20.633 79.289 55.194 101.878l11.213-17.152z'
                          fill='#000000'
                        />
                        <path
                          d='M6155.684 12390.267c31.498 17.992 51.056 51.671 51.056 87.91 0 35.604-19.036 68.987-49.705 87.142l10.435 17.623c36.864-21.822 59.761-61.962 59.761-104.755 0-43.571-23.521-84.070-61.378-105.698l-10.168 17.776z'
                          fill='#000000'
                        />
                        <path
                          d='M6028.114 12605.481c-44.8-27.32-71.537-74.906-71.537-127.303 0-47.145 21.596-90.501 59.269-118.958l-12.339-16.343c-42.844 32.359-67.41 81.684-67.41 135.301 0 59.586 30.413 113.715 81.346 144.793l10.67-17.49z'
                          fill='#000000'
                        />
                        <path
                          d='M6192.824 12357.366c38.676 27.996 61.767 73.175 61.767 120.811 0 52.429-28.047 101.602-73.195 128.317l10.435 17.623c51.354-30.382 83.251-86.313 83.251-145.941 0-54.19-26.256-105.564-70.236-137.4l-12.022 16.589z'
                          fill='#000000'
                        />
                        <path
                          d='M390.471 74.373c-17.398-17.52-39.803-30.116-67.236-42.701-29.901-10.096-54.876-10.209-67.41 2.222-5.018 4.977-7.557 12.462-7.577 22.446 2.499 2.498 4.935 10.005 9.881 24.986l-72.847 112.077c-27.453-2.601-49.941 4.782-67.502 22.201-22.569 22.375-17.674 52.347 17.122 87.44 12.431 12.544 27.382 22.558 44.831 35.113l-70.523 149.535 90.429-139.458c19.938 10.066 42.373 17.685 62.361 17.726 29.921 5.13 49.92 0.195 62.464-12.226 12.524-12.421 17.562-27.402 10.158-44.871 0.062-15.002-9.882-30.034-19.804-45.056l55.419-129.577c17.5-2.437 24.996-4.894 30.024-9.892 12.534-12.4 10.107-29.901-9.789-49.961zM304.855 268.759c0 0 0 0-2.539 2.509-4.997 4.956-17.5 7.424-34.959 4.864-7.486-2.539-14.96-5.069-22.446-7.577l85.443-144.487 29.942 10.127-55.44 134.564zM384.993 95.498c-5.017 9.257-30.044 5.346-55.941-8.725-25.856-14.059-42.742-32.983-37.724-42.25 5.058-9.257 30.096-5.335 55.982 8.755 25.856 14.059 42.721 32.962 37.683 42.219z'
                          fill='#000000'
                        />
                      </svg>
                    </div>
                    <div className='place__coords' onClick={handleClickAddIssueMarker}>
                      <div className='place__latitude'>
                        <span className='place__text'>{t('map.lat')}: </span>
                        {address.coords.lat}
                      </div>

                      <div className='place__longitude'>
                        <span className='place__text'>{t('map.lon')}: </span>
                        {address.coords.lon}
                      </div>
                    </div>
                  </div>

                  <div className='form__address address'>
                    <div className='address__img'>
                      <svg width='512' height='512' viewBox='0 0 512 512'>
                        <path d='M431.104 206.807h-356.741l171.899-160.655z' fill='#000000' />
                        <path d='M152.976 106.178l-31.549 30.823v-74.414h31.549z' fill='#000000' />
                        <path
                          d='M402.033 233.226h-298.558v179.999h99.983v-113.438h96.461v113.438h102.113z'
                          fill='#000000'
                        />
                        <path d='M70.635 438.784h370.719v27.075h-370.719v-27.075z' fill='#000000' />
                      </svg>
                    </div>
                    <div className='address__names'>
                      <div className='place__country'>
                        <Input value={address.address.country} placeholder={t('map.country')} />
                      </div>

                      <div className='place__borough'>
                        <Input value={address.address.borough} placeholder={t('map.borough')} />
                      </div>

                      <div className='place__city'>
                        <Input value={address.address.city} placeholder={t('map.city')} />
                      </div>

                      <div className='place__road'>
                        <Input value={address.address.road} placeholder={t('map.road')} />
                      </div>

                      <div className='place__house'>
                        <Input
                          value={address.address.house_number}
                          placeholder={t('map.house-number')}
                        />
                      </div>

                      <div className='place__building'>
                        <Input value={address.address.building} placeholder={t('map.building')} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='form__right-column'>
                  <Info info={info} setInfo={setInfo} setIsValid={setIsValid} />
                </div>
              </div>

              <Uploader />

              <div className='create-issue__save-btn-block'>
                <button className='create-issue__save-btn' onClick={handleClickSaveBtn}>
                  {t('issues.save-issue')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CreateIssue };
