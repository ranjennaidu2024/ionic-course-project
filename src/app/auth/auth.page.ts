import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}
  isLoading = false;

  // onLogin() {
  //   this.authService.login();
  //   setTimeout(() => {
  //     this.isLoading = false;
  //     //loadingEl.dismiss();
  //     this.router.navigateByUrl('/places/tabs/discover');
  //   }, 1500);
  // }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then((loadingEl) => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        }, 1500);
      });
  }
}
