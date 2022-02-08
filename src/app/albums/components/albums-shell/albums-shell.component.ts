import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetAlbums } from '../../state/albums.actions';
import { AlbumsState } from '../../state/albums.state';
import { Observable } from 'rxjs';
import { Album } from '../../interface/album.interface';

@Component({
  selector: 'app-albums-shell',
  templateUrl: './albums-shell.component.html',
  styleUrls: ['./albums-shell.component.scss'],
})
export class AlbumsShellComponent implements OnInit {
  @Select(AlbumsState.albums) albums$: Observable<Album[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAlbums());
  }
}
