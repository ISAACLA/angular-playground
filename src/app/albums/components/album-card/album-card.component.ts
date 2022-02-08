import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../interface/album.interface';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  @Input() album: Album;

  constructor(private readonly albumsService: AlbumsService) {}

  ngOnInit(): void {
    console.log('here');
  }
}
