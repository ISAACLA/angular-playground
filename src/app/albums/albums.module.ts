import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsShellComponent } from './components/albums-shell/albums-shell.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumsState } from './state/albums.state';
import { NgxsModule } from '@ngxs/store';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { AlbumNewComponent } from './components/album-new/album-new.component';

@NgModule({
  declarations: [
    AlbumsShellComponent,
    AlbumsListComponent,
    AlbumDetailComponent,
    AlbumCardComponent,
    AlbumNewComponent,
  ],
  imports: [CommonModule, AlbumsRoutingModule, NgxsModule.forFeature([AlbumsState])],
})
export class AlbumsModule {}
