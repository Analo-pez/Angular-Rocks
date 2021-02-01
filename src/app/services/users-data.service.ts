import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';


@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    constructor(private http: HttpClient) { }


    postLogin(user: UserModel): any {
        return this.http.post('https://rock-stars.herokuapp.com/api/login', user);
    }


    postRegister(user: UserModel): any {
        return this.http.post('https://rock-stars.herokuapp.com/api/newUser', user);

    }

    getOneUser(id: number): Observable<any> {
        return this.http.get('https://rock-stars.herokuapp.com/api/user?id=' + id)
            .pipe(map(data => {
                return data['user'];
            }));
    }


    // deleteUser(id: number): Observable < any > {
    //     const headers = new HttpHeaders().set(
    //         'Content-Type', 'application/json'
    //     )
    //     return this.http.delete('http://localhost:4000/api/deleteUser?id=' + id, { headers: headers });
    // }


}