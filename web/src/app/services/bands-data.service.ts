import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  deleteBands(id: number): Observable<any> {

    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json'
    )
    return this.http.delete('http://localhost:4000/api/deleteBand?id=' + id, { headers: headers });
  }



}
