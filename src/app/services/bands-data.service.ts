import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { BAND } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class BandsDataService {

  constructor() { }

  getBand(): Band[] {
    return BAND;
  }
}
