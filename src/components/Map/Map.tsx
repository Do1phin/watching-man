import React, { FC, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { MapContainer, TileLayer } from 'react-leaflet';

import './Map.styles.scss';

import { MarkerWrapper } from '../MarkerWrapper/MarkerWrapper';
import { SearchField } from '../Map/SearchField';

import { GET_ALL_ISSUES } from '../../apollo/operations/queries/allIssues';

const Map: FC = (props): JSX.Element => {
  const { markers, showSearch, whenReadyCb, initialMapState } = props;
  const [issues, setIssues] = useState([]);

  const [getIssues, { loading, error, data }] = useLazyQuery(GET_ALL_ISSUES);

  useEffect(() => {
    getIssues().then(({ data }) => {
      setIssues(data.allIssues);
    });
  }, [data]);

  return (
    <>
      <MapContainer whenReady={whenReadyCb} {...initialMapState}>
        {showSearch && <SearchField />}
        {markers.length && <MarkerWrapper markers={markers} />}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerWrapper issues={issues} />
      </MapContainer>
    </>
  );
};

export { Map };
