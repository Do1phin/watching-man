import React, { FC, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import './Map.styles.scss';

import { MarkerWrapper } from '../MarkerWrapper/MarkerWrapper';
import { SearchField } from '../Map/SearchField';

import { GET_ALL_ISSUES } from '../../apollo/operations/queries/allIssues';

const Map: FC = (props): JSX.Element => {
  const { markers, showSearch, whenReadyCb, initialMapState, noPopupMarker, addMyMarker } = props;
  const { t } = useTranslation();
  const [issues, setIssues] = useState([]);

  const [getIssues, { data }] = useLazyQuery(GET_ALL_ISSUES);

  useEffect(() => {
    getIssues().then(({ data }) => {
      setIssues(data.allIssues);
    });
  }, [data]);

  return (
    <>
      <MapContainer whenReady={whenReadyCb} {...initialMapState}>
        {addMyMarker && (
          <button className='my-position-button' onClick={addMyMarker}>
            {t('map.my-position')}
          </button>
        )}
        {showSearch && <SearchField />}
        {markers.length && <MarkerWrapper markers={markers} noPopupMarker={noPopupMarker} />}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </>
  );
};

export { Map };
