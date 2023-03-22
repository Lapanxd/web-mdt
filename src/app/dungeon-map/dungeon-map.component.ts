import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { enemies } from '../dungeon-databases/tjs';

@Component({
  selector: 'app-dungeon-map',
  templateUrl: './dungeon-map.component.html',
  styleUrls: ['./dungeon-map.component.scss']
})
export class DungeonMapComponent implements AfterViewInit {
  private map: any;

  constructor() { }

  ngAfterViewInit(): void {
    const bounds = L.latLngBounds(L.latLng(40.7735, -74.243), L.latLng(40.719, -74.126));

    this.map = L.map('map', {
      minZoom: 14,
      maxZoom: 15,
      maxBounds: bounds
    }).setView([40.7461, -74.1840], 14);

    enemies.forEach(element => {
      const marker = L.marker([element.posX, element.posY], {icon: this.setEnemy(element.name)}).addTo(this.map);
      marker.on('click', () => {
        console.log(element.pack);
      })
    });

    const imageUrl = '../../assets/dung-maps/tjs.webp';
    const imageBounds: L.LatLngBoundsExpression = [[40.7179, -74.243], [40.773941, -74.12544]];

    L.imageOverlay(imageUrl, imageBounds).addTo(this.map);

    this.map.on('click', (e: any) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      console.log(`${lat}, ${lng}`);
    });
  }
  

  setEnemy(name: string): L.Icon {
    let enemyIcon = L.icon({
      iconUrl: `../../assets/dung-enemies/tjs/${name}.png`,
      iconSize: [30, 30],
      iconAnchor: [0, 0],
      popupAnchor: [0, 0],
    });
    return enemyIcon;
  }

}
