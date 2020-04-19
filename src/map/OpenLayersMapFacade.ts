import 'ol/ol.css';
import { MapFacade } from "./MapFacade";
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { Image as ImageLayer } from 'ol/layer';
import { OSM, ImageArcGISRest } from 'ol/source';

function mapUrl() {
  return 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
    'Specialty/ESRI_StateCityHighway_USA/MapServer';
}

export function renderMap(selector: string): MapFacade {
  const map = new Map({
    target: selector,
    layers: [
      new TileLayer({
        source: new OSM()
      }),
      new ImageLayer({
        source: new ImageArcGISRest({
          ratio: 1,
          params: {},
          url: mapUrl()
        })
      })
    ],
    view: new View({
      center: [-10997148, 4569099],
      zoom: 4
    })
  });
  return new OpenLayersMapFacade(map);
}

export class OpenLayersMapFacade implements MapFacade {
  olMap: Map;

  constructor(olMap: Map) {
    this.olMap = olMap;
  }

  addSquare(coordinates: [number, number], sideLength: number): void {
    throw new Error("Method not implemented.");
  }
}