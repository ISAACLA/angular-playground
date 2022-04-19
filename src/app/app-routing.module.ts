import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';
import { PostsModule } from './posts/posts.module';
import { TodosModule } from './todos/todos.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ,
  // },
  {
    path: '',
    loadChildren: () => DashboardModule,
  },
  {
    path: 'users',
    loadChildren: () => UsersModule,
  },
  {
    path: 'albums',
    loadChildren: () => AlbumsModule,
  },
  {
    path: 'posts',
    loadChildren: () => PostsModule,
  },
  {
    path: 'todos',
    loadChildren: () => TodosModule,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
