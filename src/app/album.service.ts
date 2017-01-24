import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';// pulling in mock albums
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable() // injector is responsible for delivering the service where it needs to be.
export class AlbumService {
  albums: FirebaseListObservable<any[]>;//this means we're expecting Firebase to return an array list of database entries, of any variety//FirebaseListObservable object will automatically update accordingly.

  constructor(private angularFire: AngularFire) {
    this.albums = angularFire.database.list('albums');//call the instance of angularFire, call .database to access our database, .list to specify we're gathering a list of multiple things //albums matches database
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string){
    return this.angularFire.database.object('/albums/' + albumId);
  }
}
