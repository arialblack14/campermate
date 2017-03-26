import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Connectivity } from './connectivity';
import { Geolocation } from '@ionic-native/geolocation';
import API_KEY from '../../google_maps_config';

@Injectable()
export class GoogleMaps {

  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  currentMarker: any;
  apiKey: string = API_KEY;

  constructor(public connectivityService: Connectivity, public geolocation: Geolocation) {

  }

  init(mapElement: any, pleaseConnect: any): Promise<any> {

  }

  loadGoogleMaps(): Promise<any> {

  }

  initMap(): Promise<any> {

  }

  disableMap(): void {

  }

  enableMap(): void {

  }

  addConnectivityListeners(): void {

  }

  changeMarker(lat: number, lng: number): void {

  }
}
