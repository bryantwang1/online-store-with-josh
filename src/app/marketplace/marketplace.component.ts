import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})

export class MarketplaceComponent implements OnInit {

  constructor(private router: Router, private albumService: AlbumService){}
  albums: FirebaseListObservable<any[]>;

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]); //when goToDetailPage is called it will gather router info and run navigate on it with an array of albums and the id as a string to set the url route
  };

}
