import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover');
  }
}
