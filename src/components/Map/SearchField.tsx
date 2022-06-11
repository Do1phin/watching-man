import React, { FC, useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { markerStyleHelper } from '../../helpers/markerStyleHelper';

const SearchField: FC = () => {
  const map = useMap();

  const provider = new OpenStreetMapProvider();

  const searchControl = new GeoSearchControl({
    notFoundMessage: 'Sorry, that address could not be found.',
    provider: provider,
    style: 'bar',
    autoComplete: true, // optional: true|false  - default true
    autoCompleteDelay: 250, // optional: number      - default 250
    showMarker: true, // optional: true|false  - default true
    showPopup: false, // optional: true|false  - default false
    marker: {
      // optional: L.MarkerWrapper    - default L.Icon.Default
      icon: markerStyleHelper('SEARCH'), //new L.Icon.Default(),
      draggable: false,
    },
    popupFormat: ({ query, result }) => result.label, // optional: function    - default returns result label,
    resultFormat: ({ result }) => result.label, // optional: function    - default returns result label
    maxMarkers: 1, // optional: number      - default 1
    retainZoomLevel: false, // optional: true|false  - default false
    animateZoom: true, // optional: true|false  - default true
    autoClose: false, // optional: true|false  - default false
    searchLabel: 'Enter address', // optional: string      - default 'Enter address'
    keepResult: false, // optional: true|false  - default false
    updateMap: true, // optional: true|false  - default true
  });

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};

export { SearchField };
