import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExpressService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.expressAPI}/add_user`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.expressAPI}/users`);
  }
}