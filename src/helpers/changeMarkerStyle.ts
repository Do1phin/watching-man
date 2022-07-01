import {
  blueMarker,
  grayMarker,
  greenMarker,
  orangeMarker,
  positionPin,
  redMarker,
  yellowMarker,
} from '../components/MarkerWrapper/customMarkers';

const markerIcons = {
  COMPLETED: greenMarker,
  CREATED: blueMarker,
  IN_PROGRESS: yellowMarker,
  MY: positionPin,
  PENDING: orangeMarker,
  REJECTED: redMarker,
  SEARCH: grayMarker,
};

const changeMarkerStyle = (status) => {
  return markerIcons[status];
};

export { changeMarkerStyle };
