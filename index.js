import 'ol/ol.css';
import {Map, View} from 'ol/index';
import {OSM} from 'ol/source';
import {Tile as TileLayer} from 'ol/layer';
import {useGeographic} from 'ol/proj';
import getLayers from './getLayers';
const traj = require('./traj1.json');

useGeographic();
// Data Map
const dataLayer = new TileLayer({ source: new OSM() })

//Layers 
const [circles, lines] = getLayers(traj, ['green', 'yellow']);
var layers = [ dataLayer, ...lines, ...circles];


//View---------------------------------
const viewCenter = [
    traj[parseInt(traj.length/2)]['lng'], 
    traj[parseInt(traj.length/2)]['lat']
];
var view = new View({
    center: viewCenter,
    zoom: 10,
});

// Map -----------------
const map = new Map({
  target: 'map',
  view: view,
  layers: layers,
});

function formatCoordinate(coor) {
  return `
    <table>
      <tbody>
        <tr><th>current lon</th><td>${coor[0]}</td></tr>
        <tr><th>current lat</th><td>${coor[1]}</td></tr>
      </tbody>
    </table>`;
}

const info = document.getElementById('info');
map.on('moveend', function () {
  const view = map.getView();
  const center = view.getCenter();
  info.innerHTML = formatCoordinate(center);
});

map.on('pointermove', function (event) {
  if (map.hasFeatureAtPixel(event.pixel)) {
    map.getViewport().style.cursor = 'pointer';
  } else {
    map.getViewport().style.cursor = 'inherit';
  }
});
