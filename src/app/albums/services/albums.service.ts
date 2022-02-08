import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Album } from '../interface/album.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  ALBUM_URL = '/albums';
  API_ALBUM_URL = environment.API_BASE + this.ALBUM_URL;

  constructor(private readonly http: HttpClient) {}

  albums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.API_ALBUM_URL);
  }
}
