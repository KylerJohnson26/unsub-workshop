import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from './user-response';
import { HttpClient } from '@angular/common/http';
import { map, tap, concatMap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    const url = 'https://randomuser.me/api/?results=10&apikey=J0EN-79MX-OHT1-AFKF';
    return this.http.get<UserResponse>(url).pipe(
      map((response: UserResponse) => response.results)
    );
  }

}
