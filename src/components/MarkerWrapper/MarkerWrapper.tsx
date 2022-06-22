import React, { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import { map } from 'lodash';
import { MarkerCluster } from '../MarkerWrapper/MarkerCluster';

import L from 'leaflet';
import 'leaflet.markercluster';
import { useLeafletContext } from '@react-leaflet/core';
import { useEffect } from 'react';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const markerClusters = L.markerClusterGroup();

import { markerStyleHelper } from '../../helpers/markerStyleHelper';

const MarkerWrapper: FC = (props): JSX.Element => {
  const { markers, noPopupMarker } = props;
  const { t } = useTranslation();

  const context = useLeafletContext();

  const container = context.layerContainer || context.map;

  // markerClusters.addLayer(marker1);
  container.addLayer(markerClusters);

  return (
    // <MarkerCluster>
    markers &&
    map(markers, (item) => {
      markerClusters.addLayer(
        L.marker([item.point.lat, item.point.lon], {
          key: `marker-${item.id}`,
          icon: markerStyleHelper(item.status),
        }),
      );
      // (
      //   // <>
      //   <Marker
      //     key={`marker-${item.id}`}
      //     position={[item.point.lat, item.point.lon]}
      //     icon={markerStyleHelper(item.status)}>
      //     {!noPopupMarker
      //       ? item.status !== 'MY' && (
      //           <Popup key={`popup-${item.id}`}>
      //             <>
      //               <p className='popup-id'>
      //                 {t('details.issue-id')}
      //                 {item.id}
      //               </p>
      //               <hr />
      //               <p className='popup-title'>
      //                 {t('details.title')}
      //                 {item.title}
      //               </p>
      //             </>
      //           </Popup>
      //         )
      //       : null}
      //   </Marker>,
      //   // </>
      // );
    })

    // </MarkerCluster>
  );
};

export { MarkerWrapper };
