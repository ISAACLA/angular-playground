import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsShellComponent } from './components/albums-shell/albums-shell.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { RouterModule, Routes } from '@angular/router';

const albumRoutes: Routes = [
  {
    path: '',
    component: AlbumsShellComponent,
    // children: [
    // {
    //   path: ':albumId/photos',
    //   component: AlbumDetailComponent
    // },
    // {
    //   path: 'new',
    //   component: AlbumNewComponent
    // }
    // ]
  },
  {
    path: ':albumId/photos',
    component: AlbumDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(albumRoutes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
