import L from 'leaflet';
import 'leaflet.markercluster';

import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import { changeMarkerStyle } from '../../helpers';

const addressPoints = [
  [-37.8210922667, 175.2209316333, '2'],
  [-37.8210819833, 175.2213903167, '3'],
  [-37.8210881833, 175.2215004833, '3A'],
  [-37.8211946833, 175.2213655333, '1'],
  [-37.8209458667, 175.2214051333, '5'],
  [-37.8208292333, 175.2214374833, '7'],
  [-37.8325816, 175.2238798667, '537'],
  [-37.8315855167, 175.2279767, '454'],
  [-37.8096336833, 175.2223743833, '176'],
  [-37.80970685, 175.2221815833, '178'],
  [-37.8102146667, 175.2211562833, '190'],
  [-37.8088037167, 175.2242227, '156'],
  [-37.8112330167, 175.2193425667, '210'],
  [-37.8116368667, 175.2193005167, '212'],
  [-37.80812645, 175.2255449333, '146'],
  [-37.8080231333, 175.2286383167, '125'],
  [-37.8089538667, 175.2222222333, '174'],
  [-37.8080905833, 175.2275400667, '129'],
];

const markerLayer = L.layerGroup();

addressPoints.map((item) => {
  const marker = L.marker([item[0], item[1]], {
    icon: changeMarkerStyle(item[3]),
  });

  const popupContent = 'CONTENT';

  const popupOptions = {
    className: 'custom-popup',
    maxWidth: '500',
  };

  marker.bindPopup(popupContent, popupOptions);
  marker.addTo(markerLayer);
});

export { markerLayer };
