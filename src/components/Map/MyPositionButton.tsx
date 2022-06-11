import React, { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useMyPosition } from '../Map/hooks/useMyPosition';

import './MyPositionButton.styles.scss';

const MyPositionButton: FC = () => {
  const map = useMap();
  const { coords } = useMyPosition();

  useEffect(() => {
    if (coords.lat) {
      setMarkerToPosition(coords);
      flyToPosition(coords);
    }
  }, [coords.lat, coords.lon]);

  const setMarkerToPosition = (coords) => {
    map.layerPointToLatLng([coords.lat, coords.lon]);
  };

  const flyToPosition = (coords) => {
    map.flyTo([coords.lat, coords.lon], 17, {
      duration: 3,
    });
  };

  return (
    <>
      <button className='my-position-btn' onClick={flyToPosition}>
        Get my position
      </button>
    </>
  );
};

export { MyPositionButton };
