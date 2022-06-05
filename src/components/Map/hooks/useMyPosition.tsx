import { useEffect, useState } from 'react';

interface ICoords {
  lat: number;
  lon: number;
}

const useMyPosition = () => {
  const [coords, setCoords] = useState<ICoords>({ lat: 0, lon: 0 });

  const getMyCoords = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        setCoords({
          lat: coords.latitude,
          lon: coords.longitude,
        }),
      (error) => console.error(error),
      {
        enableHighAccuracy: true,
      },
    );
  };

  useEffect(() => {
    getMyCoords();
  }, []);

  return { coords };
};

export { useMyPosition };
