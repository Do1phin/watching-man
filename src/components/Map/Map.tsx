import React, { FC, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { MapContainer, TileLayer } from 'react-leaflet';
import _ from 'lodash';

import { MarkerWrapper } from '../MarkerWrapper/MarkerWrapper';
import './Map.styles.scss';

import { useMyPosition } from './hooks/useMyPosition';

import { GET_ALL_ISSUES } from '../../apollo/operations/queries/allIssues';

const Map: FC = (): JSX.Element => {
  const [issues, setIssues] = useState([]);

  const [getIssues, { loading, error, data }] = useLazyQuery(GET_ALL_ISSUES);

  useEffect(() => {
    getIssues().then(({ data }) => {
      setIssues(data.allIssues);
    });
  }, [data]);

  const { coords } = useMyPosition();

  const [map, setMap] = useState(null);

  function FlyToButton() {
    const onClick = () => {
      map.flyTo([11, 21], 12);
    };

    return <button onClick={onClick}>Add marker on click</button>;
  }

  const setMyMarker = () => {
    if (issues.find((item) => item.id === 'my')) {
      console.log('My marker there');
      return null;
    }

    const allIssues = _.concat(issues, {
      id: 'my',
      point: { lat: coords.lat, lon: coords.lon },
    });
    // const map = useMap();
    // map.flyTo([12, 14], 13);
    return setIssues(allIssues);
  };

  const initialMapState = {
    attributionControl: false,
    center: [11, 11],
    doubleClickZoom: false,
    dragging: false,
    scrollWheelZoom: true,
    zoom: 15,
    zoomControl: false,
  };

  return (
    <>
      <button onClick={setMyMarker}>Get my position</button>
      {/*{coords.lat} - {coords.lon}*/}
      <MapContainer whenCreated={setMap} center={[11, 11]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerWrapper issues={issues} />
        <FlyToButton />
      </MapContainer>
    </>
  );
};

export { Map };
