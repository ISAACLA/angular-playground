export class GetAlbums {
  static readonly type = '[Albums] Get Albums';
  constructor() {}
}

export class GetAlbumPhotos {
  static readonly type = '[Albums] Get Photos of Album';
  constructor(public id: string) {}
}
