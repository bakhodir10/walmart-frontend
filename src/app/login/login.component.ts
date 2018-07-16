import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
// interface Credentials {email:string,password:string}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // email:string;
  // password:string;
  user = {};
  constructor(private authService: AuthService) {
  }

  // credentials: Credentials;

  ngOnInit() {
  }

  login() {
    // console.log(this.user);
    this.authService.login(this.user);
  }

  logout() {
    this.authService.logout();
  }
}
