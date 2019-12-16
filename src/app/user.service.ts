import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserResponse } from './user-response';
import { HttpClient } from '@angular/common/http';
import { TokenInfo } from './token-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserResponse> {
    const url = 'https://randomuser.me/api/?results=10&apikey=J0EN-79MX-OHT1-AFKF'
    return this.http.get<UserResponse>(url);
  }

  getTokenInfo(): Observable<TokenInfo> {
    const tokenInfo = new TokenInfo('1234567890', 'Gentry Vandergoose', 1516239022);
    return of(tokenInfo);
  }

}
