import { Injectable } from '@angular/core';
import { Band } from '../models/band';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  lists: Band[] = [];

  constructor() {

  }


  createList(nameBand: string, descBand: string, linkBand: string) {
    const list3 = new Band(nameBand, descBand, linkBand);
    this.lists.push(list3);
    this.saveStorage();

    return list3.id
  }


  getList(id: string | number) {
    id = Number(id);
    return this.lists.find(listData =>
      listData.id === id);

  }


  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists))
  }



}
