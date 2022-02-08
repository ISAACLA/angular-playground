import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from '../interface/user.interface';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { GetUsers } from './users.actions';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

export class UserStateModel {
  public users: User[];
  public loading: boolean;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    users: [],
    loading: false,
  },
})
@Injectable()
export class UsersState {
  constructor(private readonly usersService: UsersService) {}

  @Selector()
  static users(state: UserStateModel) {
    return state.users;
  }

  @Selector()
  static usersLoading(state: UserStateModel) {
    return state.loading;
  }

  @Action(GetUsers)
  getUsers(ctx: StateContext<UserStateModel>, action: GetUsers) {
    ctx.patchState({ loading: true });

    // return this.usersService.users().subscribe(response => {
    //   ctx.patchState({
    //     users: response,
    //     loading: false
    //   });
    // }, err => {
    //   console.error(err);
    //   return of(err);
    // })

    return this.usersService.users().pipe(
      tap((response: User[]) => {
        console.log('response: ', response);
        ctx.patchState({
          users: response,
          loading: false,
        });
      }),
      catchError((err) => {
        ctx.patchState({
          loading: false,
        });
        return of(err);
      }),
    );
  }
}
