import {
  blueMarker,
  grayMarker,
  greenMarker,
  myMarker,
  orangeMarker,
  redMarker,
  yellowMarker,
} from '../components/MarkerWrapper/customMarkers';

const markerIcons = {
  COMPLETED: greenMarker,
  CREATED: blueMarker,
  IN_PROGRESS: yellowMarker,
  MY: myMarker,
  PENDING: orangeMarker,
  REJECTED: redMarker,
  SEARCH: grayMarker,
};

const markerStyleHelper = (status) => {
  return markerIcons[status];
};

export { markerStyleHelper };
