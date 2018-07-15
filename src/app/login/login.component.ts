import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    const user = {
      email: 'bahodir9293@gmail.com',
      password: '10'
    };
    this.authService.login(user);
  }

  logout() {
    this.authService.logout();
  }
}
