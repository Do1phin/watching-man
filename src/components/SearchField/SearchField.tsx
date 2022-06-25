import { FC, useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { markerStyleHelper } from '../../helpers';

const SearchField: FC = () => {
  const map = useMap();

  const provider = new OpenStreetMapProvider();

  const searchControl = new GeoSearchControl({
    animateZoom: true,
    autoClose: false,
    autoComplete: true,
    autoCompleteDelay: 250,
    keepResult: false,
    marker: {
      draggable: false,
      icon: markerStyleHelper('SEARCH'),
    },
    maxMarkers: 1,
    notFoundMessage: 'Sorry, that address could not be found.',
    // popupFormat: ({ query, result }) => result.label,
    provider: provider,
    // resultFormat: ({ result }) => result.label,
    retainZoomLevel: false,
    searchLabel: 'Enter address',
    showMarker: true,
    showPopup: false,
    style: 'bar',
    updateMap: true,
  });

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, searchControl]);

  return null;
};

export { SearchField };
