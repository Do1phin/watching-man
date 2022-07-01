import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

const getAddressFromCoords = (coords) => {
  L.Control.Geocoder.nominatim({
    geocodingQueryParams: { countrycodes: 'ua' },
  }).reverse(coords, 14, (result) => {
    return result[0];
  });
};
export { getAddressFromCoords };
