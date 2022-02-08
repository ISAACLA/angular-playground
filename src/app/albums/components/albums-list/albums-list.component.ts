import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../interface/album.interface';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
})
export class AlbumsListComponent implements OnInit {
  @Input() albums: Album[];

  ngOnInit(): void {
    console.log('here');
  }
}
