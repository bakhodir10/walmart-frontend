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
            <a [routerLink]="['home']" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['products']" class="nav-link" >Products</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['employees']" class="nav-link" *ngIf = "currentUser.role != 'employee'">Employee</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['signup']" class="nav-link" href="#" *ngIf = "currentUser == 'undefined'">Sign Up</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['login']" class="nav-link" href="#" *ngIf = "currentUser == 'undefined'">Log In</a>
          </li>
          <li class="nav-item">
          <a  class="nav-link"  *ngIf = "currentUser != 'undefined'">{{currentUser.name}}</a>
        </li>
        <li class="nav-item">
        <a [routerLink]="['login']" (click)="logout()" class="nav-link" *ngIf = "currentUser != 'undefined'">Log Out</a>
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
    console.log("hksjdf;aj");
    console.log(this.currentUser);
  }

  // login() {
  //   // console.log(this.user);
  //   this.authService.login(this.currentUser);

  // }

  // logout() {
  //   this.authService.logout();
  // }
}

