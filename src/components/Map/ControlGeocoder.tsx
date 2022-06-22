import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

const ControlGeocoder = (props) => {
  const { coords, cb } = props;

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim({
      geocodingQueryParams: { countrycodes: 'ua' },
    });
    geocoder.reverse(coords, 14, (results) => {
      console.log(results);
      return cb(results[0].properties.address);
    });
  }, []);

  return null;
};

export { ControlGeocoder };
