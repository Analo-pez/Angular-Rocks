import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Band } from '../models/band';


@Injectable({
  providedIn: 'root'
})
export class BandsDataService {

  constructor(private http: HttpClient) { }

  getBands(): any {
    const url = this.http.get('http://localhost:4000/api/bands');

    return url;
  }


  getNewBands(): any {
    const url = this.http.get('http://localhost:4000/api/newBands');

    return url;
  }


  postNewBands(band: Band): any {
    return this.http.post('http://localhost:4000/api/newBands', band);


  }

  // deleteBand(i: number) {
  //   this.bands = this.bands.filter(listFromData => listFromData.id !== i);
  //   localStorage.setItem('data', JSON.stringify(this.bands));
  // }




}
