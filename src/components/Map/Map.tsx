import React, { FC, useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import _ from 'lodash';

import './Map.styles.scss';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import { esriWorldImagery, googleHybrid, googleSat, googleStreets, osm } from './mapLayers';

import { generateMarker } from '../Marker/generateMarker';
import { myMarker } from '../MarkerWrapper/customMarkers';

const Map: FC = (props): JSX.Element => {
  const {
    draggableMarker,
    searchControl,
    markerCluster,
    mapState,
    createIssueMode,
    myPositionMode,
    issues,
    coords,
  } = props;

  const [map, setMap] = useState(null);
  const [layerControl, setLayerControl] = useState(null);

  const mapRef = useRef(null);
  const tileRef = useRef(null);
  const layerControlRef = useRef(null);

  tileRef.current = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });

  const initialMapState = {
    attributionControl: true,
    center: [50.447844, 30.524545],
    doubleClickZoom: false,
    dragging: true,
    layers: [tileRef.current],
    maxZoom: 18,
    minZoom: 2,
    scrollWheelZoom: true,
    zoom: 7,
    zoomControl: true,
  };

  useEffect(() => {
    mapRef.current = L.map('map', { ...initialMapState, ...mapState });
    setMap(mapRef.current);
  }, []);

  useEffect(() => {
    if (!map) return;
    if (map) {
      layerControlRef.current = L.control
        .layers({
          'ESRI World': esriWorldImagery,
          'Google Hybrid': googleHybrid,
          'Google Satellite': googleSat,
          'Google Streets': googleStreets,
          OpenStreetMap: osm,
        })
        .addTo(map);

      osm.addTo(map);
      setLayerControl(layerControlRef.current);
    }
  }, [map]);

  useEffect(() => {
    if (!map) return;
    if (map && searchControl) {
      map.addControl(searchControl);
      return () => map.removeControl(searchControl);
    }
  }, [map, searchControl]);

  useEffect(() => {
    if (!map) return;
    if (map && draggableMarker) {
      createIssueMode && draggableMarker.addTo(mapRef.current);
      return () => map.removeLayer(draggableMarker);
    }
  }, [map, createIssueMode, draggableMarker]);

  useEffect(() => {
    if (!map) return;
    if (map && myPositionMode && coords) {
      const setMarkerToPosition = (coords) => {
        map.layerPointToLatLng([coords.lat, coords.lon]);
        L.marker([coords.lat, coords.lon], { icon: myMarker }).addTo(map);
      };

      const flyToPosition = (coords) => {
        map.flyTo([coords.lat, coords.lon], 17, {
          duration: 3,
        });
      };

      setMarkerToPosition(coords);
      flyToPosition(coords);
      // return () => map.removeLayer(draggableMarker);
    }
  }, [map, myPositionMode, coords]);

  useEffect(() => {
    if (!map) return;
    if (map) {
      const markerLayer = L.layerGroup();

      _.map(issues, (item) => {
        const marker = generateMarker(item);
        marker.addTo(markerLayer);
      });

      if (markerCluster) {
        const markerClusters = L.markerClusterGroup({
          animate: true,
          animateAddingMarkers: false,
          removeOutsideVisibleBounds: true,
          showCoverageOnHover: true,
          spiderfyOnMaxZoom: true,
          zoomToBoundsOnClick: true,
        });
        markerClusters.addLayer(markerLayer);
        map.addLayer(markerClusters);
      }
    }
  }, [map, issues]);

  return (
    <>
      <div id='map' className='map' />
    </>
  );
};

export { Map };
