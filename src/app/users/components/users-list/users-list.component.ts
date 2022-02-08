import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];

  constructor() {}

  ngOnInit(): void {}
}
