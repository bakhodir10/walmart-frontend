import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const constant = require('../app.constant');
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  // constructor(private jwtHelper: JwtHelperService) {}
  constructor(private http: HttpClient, public router: Router){}

  public getToken(): string {
    return localStorage.getItem('token');
  }
  
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== undefined;
  }

  public login(user): void {  
    this.http.post(constant.url + '/auth/login', user).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['home']);
    });
  }

  public logout(): void {
    this.http.post(constant.url + '/auth/logout', {}).subscribe(res => {
      console.log(res);
      localStorage.removeItem('token');
      this.router.navigate(['home']);
    });
  }
}
