import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setLocal(key: string, data: any) {
    try {
      localStorage.setItem('band', JSON.stringify(data))
    } catch (e) {
      console.log(e);
    }
  }
  getLocal(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      console.log(e);
    }
  }

  removeLocal(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.log(e);
    }
  }

  clearLocal() {
    try {
      localStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }

}
