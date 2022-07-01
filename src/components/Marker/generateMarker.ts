import L from 'leaflet';
import { changeMarkerStyle } from '../../helpers';

const generateMarker = (item) => {
  const marker = L.marker([item.point.lat, item.point.lon], {
    icon: changeMarkerStyle(item.status),
  });

  // const popupContent = ReactDOMServer.renderToString(<Popup />);
  const popupContent = item.title;
  const popupOptions = {
    className: 'custom-popup',
    maxWidth: 500,
  };

  marker.bindPopup(popupContent, popupOptions);
  marker.bindPopup(popupContent);
  return marker;
};

export { generateMarker };
