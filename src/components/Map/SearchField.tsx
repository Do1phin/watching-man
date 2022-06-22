import React, { FC, useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { markerStyleHelper } from '../../helpers/markerStyleHelper';

const SearchField: FC = () => {
  const map = useMap();

  const provider = new OpenStreetMapProvider();

  const searchControl = new GeoSearchControl({
    animateZoom: true,
    autoComplete: true,
    autoClose: false,
    autoCompleteDelay: 250,
    notFoundMessage: 'Sorry, that address could not be found.',
    keepResult: false,
    provider: provider,
    retainZoomLevel: false,
    style: 'bar',
    showMarker: true,
    showPopup: false,
    marker: {
      // optional: L.MarkerWrapper    - default L.Icon.Default
      icon: markerStyleHelper('SEARCH'), //new L.Icon.Default(),
      draggable: false,
    },
    popupFormat: ({ query, result }) => result.label,
    resultFormat: ({ result }) => result.label,
    maxMarkers: 1,
    searchLabel: 'Enter address',
    updateMap: true,
  });

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};

export { SearchField };
