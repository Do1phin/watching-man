import { useEffect, useState } from 'react';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import L from 'leaflet';

const useReverseGeocode = () => {
  const [address, setAddress] = useState(null);

  const coords = { lat: 50.372937746926254, lng: 30.528430938720707 };

  const geocoder = L.Control.Geocoder.nominatim({
    acceptLanguage: 'ua',
  });
  const getAddressFromGeocodes = (coords) =>
    geocoder.reverse(coords, 18, (results) => {
      return setAddress(results[0].properties.address);
    });

  return { address, getAddressFromGeocodes };
};

export { useReverseGeocode };
