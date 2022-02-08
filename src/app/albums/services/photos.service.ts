import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interface/photo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  ALBUM_URL = '/albums';
  PHOTO_URL = 'photos';
  API_ALBUM_PHOTO_URL = environment.API_BASE + this.ALBUM_URL;
  API_PHOTO_URL = environment.API_BASE + '/' + this.PHOTO_URL;

  constructor(private http: HttpClient) {}

  allPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.API_PHOTO_URL);
  }

  albumPhotos(id: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.API_ALBUM_PHOTO_URL + '/' + id + '/' + this.PHOTO_URL);
  }
}
