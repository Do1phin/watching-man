import L from 'leaflet';

const blueMarker = L.divIcon({
  className: 'svg-icon blue-marker',
  html: `
<svg 
  width="25px" 
  height="41px" 
  viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"
>
 <g transform="translate(0 -1028.4)">
  <path 
    d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" 
    transform="translate(0 1028.4)" 
    fill="#3498DB"/>
  <path 
    d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" 
    transform="translate(0 1028.4)" 
    fill="#21618C"/>
 </g>
</svg>`,
  iconAnchor: [10, 41],
  iconSize: [25, 41],
});

const redMarker = L.divIcon({
  className: 'svg-icon red-marker',
  html: `
<svg 
  width="25px" 
  height="41px" 
  viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"
>
 <g transform="translate(0 -1028.4)">
  <path 
    d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" 
    transform="translate(0 1028.4)" 
    fill="#E74C3C"/>
  <path 
    d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" 
    transform="translate(0 1028.4)" 
    fill="#943126"/>
 </g>
</svg>`,
  iconAnchor: [10, 41],
  iconSize: [25, 41],
});

const greenMarker = L.divIcon({
  className: 'svg-icon green-marker',
  html: `
<svg 
  width="25px" 
  height="41px" 
  viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"
>
 <g transform="translate(0 -1028.4)">
  <path 
    d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" 
    transform="translate(0 1028.4)" 
    fill="#2ECC71"/>
  <path 
    d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" 
    transform="translate(0 1028.4)" 
    fill="#1D8348"/>
 </g>
</svg>`,
  iconAnchor: [10, 41],
  iconSize: [25, 41],
});

const yellowMarker = L.divIcon({
  className: 'svg-icon yellow-marker',
  html: `
<svg 
  width="25px" 
  height="41px" 
  viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"
>
 <g transform="translate(0 -1028.4)">
  <path 
    d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" 
    transform="translate(0 1028.4)" 
    fill="#F1C40F"/>
  <path 
    d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" 
    transform="translate(0 1028.4)" 
    fill="#9A7D0A"/>
 </g>
</svg>`,
  iconAnchor: [10, 41],
  iconSize: [25, 41],
});

const orangeMarker = L.divIcon({
  className: 'svg-icon orange-marker',
  html: `
<svg 
  width="25px" 
  height="41px" 
  viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"
>
 <g transform="translate(0 -1028.4)">
  <path 
    d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" 
    transform="translate(0 1028.4)" 
    fill="#F39C12"/>
  <path 
    d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" 
    transform="translate(0 1028.4)" 
    fill="#9C640C"/>
 </g>
</svg>`,
  iconAnchor: [10, 41],
  iconSize: [25, 41],
});

const grayMarker = L.divIcon({
  className: 'svg-icon gray-marker',
  html: `
<svg 
  width="25px" 
  height="41px" 
  viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"
>
 <g transform="translate(0 -1028.4)">
  <path 
    d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" 
    transform="translate(0 1028.4)" 
    fill="#7F8C8D"/>
  <path 
    d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" 
    transform="translate(0 1028.4)" 
    fill="#515A5A"/>
 </g>
</svg>`,
  iconAnchor: [10, 41],
  iconSize: [25, 41],
});

const myMarker = L.divIcon({
  className: 'svg-icon my-marker',
  html: `
<svg 
  width="25px" 
  height="41px" 
  viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"
>
 <g transform="translate(0 -1028.4)">
  <path 
    d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" 
    transform="translate(0 1028.4)" 
    fill="#9B59B6"/>
  <path 
    d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" 
    transform="translate(0 1028.4)" 
    fill="#633974"/>
 </g>
</svg>`,
  iconAnchor: [10, 41],
  iconSize: [25, 41],
});

export { myMarker, blueMarker, redMarker, greenMarker, yellowMarker, orangeMarker, grayMarker };
