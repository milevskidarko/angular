import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  login() {
    if (this.username !== '' && this.password !== '') {
      this.router.navigate(['/movies']);
    }
  }
}
