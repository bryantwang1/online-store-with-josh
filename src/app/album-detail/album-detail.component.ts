import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; //contains information about a route associated with a component loaded in an outlet.  //collect parameters for use when routing
import { Location } from '@angular/common'; //normalize URLs when traveling between routes, especially dynamic ones.
import { Album } from '../album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId: number = null;//created and will be filled later

  constructor(private route: ActivatedRoute, private location: Location) { } //we're ensuring that any new AlbumDetailComponent instances are created with these objects available to them. //any instance of AlbumDetailComponent will have route and location properties that can be accessed by calling this.route and this.location.

  ngOnInit() {// is a component lifecycle hook. //Any code we place here will run when a component is initialized (that is, after constructor() creates it).
    this.route.params.forEach((urlParametersArray) => {//this.route uses ActivatedRoute, uses params to retrieve any parameters from goToDetailPage method//Loops through each temporarly assigning each paramater to urlParametersArray.
       this.albumId = parseInt(urlParametersArray['id']); //retrieves the number with the key Id. this matches the route's path, and assigns to albumId
     }); // => is a Fat arrow that basically is a short hand function. it keeps the value of "This"
   }

}
