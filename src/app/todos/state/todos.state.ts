import { Todo } from '../interface/todo.interface';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { GetTodos } from './todos.action';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

export class TodosStateModel {
  loading: boolean;
  todos: Todo[];
  todosError: string;
}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    loading: false,
    todos: null,
    todosError: null,
  },
})
@Injectable()
export class TodosState {
  constructor(private readonly toDosService: TodosService) {}

  @Selector()
  static todos(state: TodosStateModel) {
    return state.todos;
  }

  @Action(GetTodos)
  getTodos(ctx: StateContext<TodosStateModel>, action: GetTodos) {
    console.log('state: action');
    ctx.patchState({ loading: true, todos: null, todosError: null });

    return this.toDosService.getTodos().pipe(
      tap((response) => {
        ctx.patchState({
          loading: false,
          todos: response,
        });
      }),
      catchError((err) => {
        console.error(err);
        ctx.patchState({
          loading: false,
          todosError: err,
        });
        return of(err);
      }),
    );
  }
}
