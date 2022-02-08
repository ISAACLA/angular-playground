import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersShellComponent } from './components/users-shell/users-shell.component';
import { UserNewComponent } from './components/user-new/user-new.component';

const UserRoutes: Routes = [
  {
    path: '',
    component: UsersShellComponent,
    children: [
      {
        path: 'profile/:userId',
        component: UserDetailComponent,
      },
      {
        path: 'new',
        component: UserNewComponent,
      },
      // {
      //   path: ''
      // }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(UserRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
