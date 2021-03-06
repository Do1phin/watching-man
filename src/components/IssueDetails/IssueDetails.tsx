import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './IssueDetails.styles.scss';

import { Carousel, Map } from '../index';

import { createMarker } from '../../helpers/createMarker';

const IssueDetails: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const data = location.state;

  const mapState = {
    attributionControl: true,
    center: [data.point.lat, data.point.lon],
    doubleClickZoom: false,
    dragging: false,
    maxZoom: 18,
    scrollWheelZoom: true,
    zoom: 17,
    zoomControl: false,
  };

  const markers = createMarker([data]);

  return (
    <section className='issue-details'>
      <div className='body-container'>
        <div className='details'>
          <div className='details__carousel carousel'>
            <Carousel id={data.id} />
          </div>

          <div className='details__info info'>
            <p className='info__issue-id'>
              {t('details.issue-id')}
              <span>: {data.id}</span>
            </p>

            <hr />

            <p className='info__coordinates'>
              {t('details.coordinates')}
              <span>
                : [{data.point.lat} , {data.point.lon}]
              </span>
            </p>

            <Map mapState={mapState} markers={markers} noPopupMarker />

            <p className='info__status'>{data.status}</p>
            <p className='info__title'>
              {t('details.title')}
              <span>: {data.title}</span>
            </p>
            <p className='info__description'>
              {t('details.description')}
              <span>: {data.description}</span>
            </p>

            <p className='info__timestamp'>
              {t('details.create-timestamp')}
              <span>: {data.createdAt}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IssueDetails };
