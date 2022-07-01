import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { changeMarkerStyle } from '../../helpers';

const provider = new OpenStreetMapProvider();

const searchControl = new GeoSearchControl({
  animateZoom: true,
  autoClose: false,
  autoComplete: true,
  autoCompleteDelay: 250,
  keepResult: false,
  marker: {
    draggable: false,
    icon: changeMarkerStyle('SEARCH'),
  },
  maxMarkers: 1,
  notFoundMessage: 'Sorry, that address could not be found.',
  // popupFormat: ({ query, result }) => result.label,
  provider: provider,
  // resultFormat: ({ result }) => result.label,
  retainZoomLevel: false,
  searchLabel: 'Адрес',
  showMarker: true,
  showPopup: false,
  style: 'bar',
  updateMap: true,
});

export { searchControl };
