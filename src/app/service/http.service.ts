import { Injectable } from '@angular/core';
import { User, UserComplemetary } from '../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private urlMockApi = 'api/userData';
  private urlMockApi2 = 'api/userDataComplemet';
  constructor(private httpClient: HttpClient) {}

  getUserData(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlMockApi);
  }
  getUserDataComplementary(): Observable<UserComplemetary[]> {
    return this.httpClient.get<UserComplemetary[]>(this.urlMockApi2);
  }
}
