import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetTodos } from '../../state/todos.action';
import { TodosState } from '../../state/todos.state';
import { Observable } from 'rxjs';
import { Todo } from '../../interface/todo.interface';

@Component({
  selector: 'app-todos-shell',
  templateUrl: './todos-shell.component.html',
  styleUrls: ['./todos-shell.component.scss'],
})
export class TodosShellComponent implements OnInit {
  @Select(TodosState.todos) todos$: Observable<Todo[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }
}
