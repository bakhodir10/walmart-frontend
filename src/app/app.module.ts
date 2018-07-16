import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './material.module';
import { AppRouters } from './app.routes';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { RoleGuardService } from './auth/role-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EmployeeComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRouters,
    HttpClientModule

  ],
  providers: [AuthInterceptor, AuthService, AuthGuardService, RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
