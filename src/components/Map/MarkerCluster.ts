import L from 'leaflet';
import 'leaflet.markercluster';

const createMarkerCluster = (map) => {
  // const [map, setMap] = useState(null);

  const markerCluster = L.markerClusterGroup({
    disableClusteringAtZoom: 13,
    removeOutsideVisibleBounds: true,
  });
  const marker1 = L.marker([50, 47], {}).bindPopup(`Name: 1`);
  const marker2 = L.marker([51, 48], {}).bindPopup(`Name: 2`);
  const marker3 = L.marker([52, 49], {}).bindPopup(`Name: 3`);
  console.log('markerCluster', markerCluster);
  console.log('markerCluster map', map);
  markerCluster.addLayer(marker1);
  markerCluster.addLayer(marker2);
  markerCluster.addLayer(marker3);
  map.addLayer(markerCluster);
};

export { createMarkerCluster };
