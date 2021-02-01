import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Band } from '../models/band';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BandsDataService {

  constructor(private http: HttpClient) { }

  getBands(): any {
    const url = this.http.get('https://rock-stars.herokuapp.com/api/bands');

    return url;
  }


  postNewBands(band: Band): any {
    return this.http.post('https://rock-stars.herokuapp.com/api/newBands', band);

  }


  deleteBands(id: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json'
    )
    return this.http.delete('https://rock-stars.herokuapp.com/api/deleteBand?id=' + id, { headers: headers });
  }


  getOneBand(id: number): Observable<any> {
    return this.http.get('https://rock-stars.herokuapp.com/api/bandId?id=' + id)
      .pipe(map(data => {
        return data['results'][0];
      }));
  }


}
