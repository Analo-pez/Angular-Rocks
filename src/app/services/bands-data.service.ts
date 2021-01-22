import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { BAND } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class BandsDataService {

  constructor() { }

  getBand(): Band[] {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data'))
    } else {
      return BAND;
    }
  }
  getId(id: number) {
    return BAND[id];
  }

}
