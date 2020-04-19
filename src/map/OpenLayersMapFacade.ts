import { MapFacade } from "./MapFacade";
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export function renderMap(selector: string): MapFacade {
  console.log(`rendering map at ${selector}`);
  const source = new OSM();
  console.log({ source });

  const map = new Map({
    target: selector,
    layers: [
      new TileLayer({
        source
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 0
    })
  });
  console.log({ map });
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