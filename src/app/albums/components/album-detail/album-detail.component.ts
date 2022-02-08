import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { Select, Store } from '@ngxs/store';
import { GetAlbumPhotos } from '../../state/albums.actions';
import { AlbumsState } from '../../state/albums.state';
import { Observable } from 'rxjs';
import { Photo } from '../../interface/photo.interface';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
})
export class AlbumDetailComponent implements OnInit {
  @Select(AlbumsState.photos) photos$: Observable<Photo[]>;

  albumId: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly photosService: PhotosService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.albumId = <string>this.route.snapshot.paramMap.get('albumId');
    // console.log('here: ', this.albumId);
    this.store.dispatch(new GetAlbumPhotos(this.albumId));
  }
}
