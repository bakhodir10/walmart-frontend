import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }

    // decode the token to get its payload
    const tokenPayload = decode(token);
    console.log(tokenPayload);
    if (tokenPayload.user.role !== expectedRole) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
