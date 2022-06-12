import { logDOM } from '@storybook/testing-library';
import React, { FC, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import L from 'leaflet';
import LCG from 'leaflet-control-geocoder';

import './IssueDetails.styles.scss';

import { Carousel } from '../Carousel/Carousel';
import { Map } from '../Map/Map';

import { createMarkerHelper } from '../../helpers/createMarkerHelper';

const IssueDetails: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [map, setMap] = useState(null);
  const location = useLocation();
  const data = location.state;

  // const geocoder = L.Control.geocoder({
  //   defaultMarkGeocode: false,
  // });

  const mapState = {
    attributionControl: false,
    center: [data.point.lat, data.point.lon],
    doubleClickZoom: false,
    dragging: false,
    scrollWheelZoom: true,
    zoom: 17,
    zoomControl: false,
  };

  const markers = createMarkerHelper([data]);

  const fffff = () => {
    if (map) {
      console.log('111111');
      // geocoder.reverse([50,30], () => console.log('ffff cb'))
    }
  };

  // var geocoder = L.Control.geocoder({
  //   defaultMarkGeocode: false
  // })
  //   .on('markgeocode', function(e) {
  //     var bbox = e.geocode.bbox;
  //     var poly = L.polygon([
  //       bbox.getSouthEast(),
  //       bbox.getNorthEast(),
  //       bbox.getNorthWest(),
  //       bbox.getSouthWest()
  //     ]).addTo(map);
  //     map.fitBounds(poly.getBounds());
  //   })
  //   .addTo(map);

  useEffect(() => {
    fffff();
  }, [map]);

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
              <span>{data.id}</span>
            </p>

            <hr />
            <button onClick={fffff}>adsfasdfasdf</button>

            {/*<p className='info__place'>*/}
            {/*  {t('details.place')}*/}
            {/*  <span>{data.place}</span>*/}
            {/*</p>*/}

            <p className='info__coordinates'>
              {t('details.coordinates')}
              <span>
                [{data.point.lat} , {data.point.lon}]
              </span>
            </p>

            <Map initialMapState={mapState} markers={markers} whenReadyCb={setMap} />

            <p className='info__status'>{data.status}</p>
            <p className='info__title'>
              {t('details.title')}
              <span>{data.title}</span>
            </p>
            <p className='info__description'>
              {t('details.description')}
              <span>{data.description}</span>
            </p>

            <p className='info__timestamp'>
              {t('details.timestamp')}
              <span>{data.createdAt}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IssueDetails };
