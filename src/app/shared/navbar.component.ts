import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../user/user.model';

@Component({
  selector: 'navi-bar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
    <div class="container">
      <a class="navbar-brand" href="#">Walmart App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a [routerLink]="['home']" class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['products']" class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['employees']" class="nav-link" href="#">Employee</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['signup']" class="nav-link" href="#" *ngIf = "currentUser.role =='customer'">Sign Up</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['login']" class="nav-link" href="#" *ngIf = "currentUser.role =='customer'">Log In</a>
            <a  class="nav-link"  *ngIf = "currentUser.role =='employee'">{{currentUser.email}}</a>
            <a [routerLink]="['login']" class="nav-link" href="#" *ngIf = "currentUser.role =='employee'">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `,
  styleUrls: ['./navbar.component.css']
})
export class NavComponent {


  currentUser: User;
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    console.log(this.currentUser);
  }
}

