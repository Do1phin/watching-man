import React, { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';
import _ from 'lodash';

import { blueMarker, greenMarker, myMarker, redMarker } from './customMarkers';

const markerIcons = {
  blueMarker: blueMarker,
  greenMarker: greenMarker,
  myMarker: myMarker,
  redMarker: redMarker,
};

const MarkerWrapper: FC = (props): JSX.Element => {
  const { issues } = props;

  return (
    issues &&
    _.map(issues, (issue) => (
      <>
        <Marker
          key={`marker-${issue.point.id}`}
          position={[issue.point.lat, issue.point.lon]}
          icon={blueMarker}>
          <Popup>
            ${issue.point.id} <br /> Easily customizable.
          </Popup>
        </Marker>
      </>
    ))
  );
};

export { MarkerWrapper };
