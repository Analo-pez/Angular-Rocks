import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BandsDataService {

  constructor(private http: HttpClient) { }

  getBands(): any {
    const url = this.http.get('http://localhost:4000/api/bands');

    return url;
  }

  //FUNCIONES DEL SERVICIO LOCALSTORAGE QUE ELIMINÉ

  // createList(nameBand: string, descBand: string, linkBand: string) {
  //   const list3 = new Band(nameBand, descBand, linkBand);
  //   this.lists.push(list3);
  //   this.saveStorage();

  //   return list3.id
  // }


  // getList(id: string | number) {
  //   id = Number(id);
  //   return this.lists.find(listData =>
  //     listData.id === id);

  // }

}
