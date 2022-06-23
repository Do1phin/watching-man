import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import L from 'leaflet';

const getAddress = (coords) => {
  const geocoder = L.Control.Geocoder.nominatim();
  return geocoder.reverse(coords, 18, (results) => {
    return results[0].properties.address;
  });
};

export { getAddress };
