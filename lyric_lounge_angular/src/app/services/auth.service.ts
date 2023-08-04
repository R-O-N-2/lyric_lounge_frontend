import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString(),
      username: '',
      password: '',
      location: '',
    };
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString(),
      username: '',
      password: '',
      location: '',
    };
    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['']);
  }
}
