import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent {
  @Input() selectedPlace!: Place;

  constructor(private modalCtrl: ModalController) {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
  }
}
