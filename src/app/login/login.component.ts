import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { User } from '../user/user.model';
// interface Credentials {email:string,password:string}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;

  user = {};
  currentUser: User;

  constructor(private authService: AuthService) {
  }

  // credentials: Credentials;

  ngOnInit() {
    this.currentUser=this.authService.getCurrentUser();
    console.log(this.currentUser);
  }

  login() {
    // console.log(this.user);
    this.authService.login(this.user);

  }

  logout() {
    this.authService.logout();
  }

}
