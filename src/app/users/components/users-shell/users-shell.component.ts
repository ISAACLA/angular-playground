import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetUsers } from '../../state/users.actions';
import { UsersState } from '../../state/users.state';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss'],
})
export class UsersShellComponent implements OnInit {
  @Select(UsersState.users) users$: Observable<User[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }
}
