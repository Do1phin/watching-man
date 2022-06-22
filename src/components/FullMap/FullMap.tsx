import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useMyPosition } from '../Map/hooks/useMyPosition';
import { concat } from 'lodash';

import './FullMap.styles.scss';

import { GET_ALL_ISSUES } from '../../apollo/operations/index';

import { Map } from '../Map/Map';

import { createMarkerHelper } from '../../helpers/createMarkerHelper';

const mapState = {
  attributionControl: false,
  center: [50.447844, 30.524545],
  doubleClickZoom: false,
  dragging: true,
  maxZoom: 18,
  scrollWheelZoom: true,
  zoom: 7,
  zoomControl: true,
};

const FullMap: FC = (): JSX.Element => {
  const [markers, setMarkers] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_ISSUES);
  const [map, setMap] = useState(null);
  const { coords } = useMyPosition();

  const addAllMarkers = (data) => {
    if (data) {
      const markers = createMarkerHelper(data.allIssues);
      setMarkers(markers);
    }
  };

  const addMyMarker = () => {
    if (coords.lat) {
      const myMarker = {
        point: {
          lat: coords.lat,
          lon: coords.lon,
        },
        status: 'MY',
      };

      const allMarkers = concat(markers, myMarker);
      setMarkers(allMarkers);
      setViewToCoords();
    }
  };

  const setViewToCoords = () => {
    map &&
      map.target.flyTo([coords.lat, coords.lon], 17, {
        duration: 3,
      });
  };

  useEffect(() => {
    data && addAllMarkers(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <section className='full-map'>
      <div className='full-map__container'>
        <Map
          addMyMarker={addMyMarker}
          data-class={'full-map'}
          markers={markers}
          initialMapState={mapState}
          showSearch
          whenReadyCb={setMap}
        />
      </div>
    </section>
  );
};

export { FullMap };
