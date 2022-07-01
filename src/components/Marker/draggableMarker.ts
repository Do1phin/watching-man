import L from 'leaflet';

import { getAddressFromCoords } from '../index';

import { positionPin } from '../MarkerWrapper/customMarkers';

const draggableMarker = L.marker([50.4479158, 30.5202355], {
  draggable: true,
  icon: positionPin,
}).on('dragend', function (e) {
  const coords = e.target.getLatLng();
  return getAddressFromCoords(coords);
});

export { draggableMarker };
