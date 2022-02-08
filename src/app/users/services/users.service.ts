import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  USER_URL = '/users';
  API_USERS_URL = environment.API_BASE + this.USER_URL;

  constructor(private readonly http: HttpClient) {}

  users(): Observable<User[]> {
    return this.http.get<User[]>(this.API_USERS_URL);
  }
}
