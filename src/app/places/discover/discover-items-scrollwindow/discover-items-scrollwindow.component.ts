import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-discover-items-scrollwindow',
  templateUrl: './discover-items-scrollwindow.component.html',
  styleUrls: ['./discover-items-scrollwindow.component.scss'],
})
export class DiscoverItemsScrollwindowComponent {
  nonFeaturedPlaces: Place[];

  constructor(private placesService: PlacesService) {
    const places = this.placesService.places;
    this.nonFeaturedPlaces = places.filter((p) => p.id !== 'p1');
    console.log(this.nonFeaturedPlaces);
  }
}
