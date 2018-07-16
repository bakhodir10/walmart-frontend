
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NavComponent } from './shared/navbar.component';
import { SignUpComponent } from './signUp/sign-up.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {AppRouters} from './app.routes';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {EmployeeComponent} from './employee/employee.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {RoleGuardService} from './auth/role-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth.interceptor.service';
import {UserService} from './user/user.service';
import {ProductService} from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EmployeeComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRouters,
    HttpClientModule
  ],
  providers: [
    AuthInterceptor,
    AuthService,
    AuthGuardService,
    RoleGuardService,
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
