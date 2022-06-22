import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import L from 'leaflet';

const getAddress = (coords) => {
  // const coords = { lat: 50.372937746926254, lng: 30.528430938720707 };

  const geocoder = L.Control.Geocoder.nominatim();
  return geocoder.reverse(coords, 18, (results) => {
    console.log('result', results);
    const r = results[0];
    console.log('r', r);
    return results[0];
  });
};

export { getAddress };
