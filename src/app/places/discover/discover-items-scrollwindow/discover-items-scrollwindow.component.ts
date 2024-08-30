import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-discover-items-scrollwindow',
  templateUrl: './discover-items-scrollwindow.component.html',
  styleUrls: ['./discover-items-scrollwindow.component.scss'],
})
export class DiscoverItemsScrollwindowComponent implements OnInit {
  nonFeaturedPlaces!: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.placesService.places.subscribe((places) => {
      this.nonFeaturedPlaces = places.filter((p) => p.id !== 'p1');
      console.log(this.nonFeaturedPlaces);
    });
  }
}
