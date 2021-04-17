import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {

  }
  // tslint:disable-next-line: typedef
  getUsers() {
    return this.http.get(this.apiURL); // observables
  }
}
