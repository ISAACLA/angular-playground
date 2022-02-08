import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { GetAlbumPhotos, GetAlbums } from './albums.actions';
import { of } from 'rxjs';
import { Album } from '../interface/album.interface';
import { Photo } from '../interface/photo.interface';
import { PhotosService } from '../services/photos.service';

export class AlbumStateModel {
  public albums: Album[];
  public photos: Photo[];
  public loading: boolean;
  public albumsError: string;
  public photoError: string;
}

@State<AlbumStateModel>({
  name: 'albums',
  defaults: {
    albums: [],
    photos: [],
    albumsError: null,
    photoError: null,
    loading: false,
  },
})
@Injectable()
export class AlbumsState {
  constructor(private readonly albumsService: AlbumsService, private readonly photosService: PhotosService) {}

  @Selector()
  static albums(state: AlbumStateModel): Album[] {
    return state.albums;
  }

  @Selector()
  static photos(state: AlbumStateModel) {
    return state.photos;
  }

  @Action(GetAlbums)
  getAlbums(ctx: StateContext<AlbumStateModel>, action: GetAlbums) {
    ctx.patchState({ loading: true, albumsError: null, albums: [] });

    return this.albumsService.albums().subscribe(
      (response: Album[]) => {
        ctx.patchState({ loading: false, albums: response });
      },
      (error) => {
        console.error(error);
        ctx.patchState({ albumsError: error });
        return of(error);
      },
    );
  }

  @Action(GetAlbumPhotos)
  getAlbumPhotos(ctx: StateContext<AlbumStateModel>, action: GetAlbumPhotos) {
    ctx.patchState({ loading: true, photoError: null, photos: [] });

    // return this.photosService.albumPhotos(action.id).subscribe((response: Photo[]) => {
    this.photosService.albumPhotos(action.id).subscribe(
      (response: Photo[]) => {
        ctx.patchState({ loading: false, photos: response });
      },
      (err) => {
        ctx.patchState({ loading: false, photoError: err });
        // return of(err);
      },
    );
  }
}
