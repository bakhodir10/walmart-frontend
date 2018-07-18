import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {AuthModel} from './auth/auth.model';

import {FormsModule} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NavComponent} from './shared/navbar.component';
import {SignUpComponent} from './signUp/sign-up.component';
import {AppRouters} from './app.routes';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {EmployeeComponent} from './employee/employee.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {RoleGuardService} from './auth/role-guard.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth.interceptor.service';
import {UserService} from './user/user.service';
import {ProductService} from './products/product.service';
import {User} from './user/user.model';
import {JwtInterceptor} from './auth/jwt.interceptor';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FeedbackComponent} from './feedback/feedback.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {StarComponent} from './shared/star.component';
import {StoreModule} from '@ngrx/store';
import {employeeReducer} from './reducers/employee.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EmployeeComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    SignUpComponent,
    StarComponent,
    FeedbackComponent,
    ProductDetailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouters,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({
      employee: employeeReducer
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    AuthService,
    AuthGuardService,
    RoleGuardService,
    UserService,
    ProductService,
    User,
    AuthModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
