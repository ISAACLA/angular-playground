import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  TODOS_URL = '/todos';
  API_POSTS_URL = environment.API_BASE + this.TODOS_URL;

  constructor(private readonly http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_POSTS_URL);
  }
}
