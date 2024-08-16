import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place | undefined; // Allow place to be undefined initially

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const placeId = paramMap.get('placeId'); // Can return 'null'

      if (!placeId) {
        // Handle the case when no placeId is found
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      // Ensure getPlace accepts only a string and handle undefined response
      this.place = this.placesService.getPlace(placeId);

      if (!this.place) {
        // Handle the case when no place is found
        this.navCtrl.navigateBack('/places/tabs/discover');
      }
    });
  }

  onBookPlace() {
    if (!this.place) {
      return; // If no place is defined, return early
    }

    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
      });
  }
}
