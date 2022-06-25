import L from 'leaflet';
import 'leaflet.markercluster';
import { useLeafletContext } from '@react-leaflet/core';
import { useEffect } from 'react';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const markerClusters = L.markerClusterGroup();

const MarkerCluster = (props) => {
  const context = useLeafletContext();
  console.log('clust', props);

  useEffect(() => {
    const marker1 = L.marker([50, 47.1111], {}).bindPopup('Name: 1');
    const marker2 = L.marker([50, 47.1122], {}).bindPopup('Name: 2');
    const marker3 = L.marker([50, 47.1144], {}).bindPopup('Name: 3');

    const container = context.layerContainer || context.map;

    markerClusters.addLayer(marker1);
    markerClusters.addLayer(marker2);
    markerClusters.addLayer(marker3);
    container.addLayer(markerClusters);

    return () => {
      container.removeLayer(markerClusters);
    };
  });

  return null;
};

export { MarkerCluster };
