import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TempMainComponent } from './temp-main/temp-main.component';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';
import { PostsModule } from './posts/posts.module';
import { TodosModule } from './todos/todos.module';

const routes: Routes = [
  {
    path: '',
    component: TempMainComponent,
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
