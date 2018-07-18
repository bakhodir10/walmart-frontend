import { ProductDetailComponent } from './products/product-detail.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {LoginComponent} from './login/login.component';
import {EmployeeComponent} from './employee/employee.component';
import {RoleGuardService} from './auth/role-guard.service';
import {HomeComponent} from './home/home.component';
import {SignUpComponent} from './signUp/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'employee'
        }
  },
  {
    path: 'products/:_id',
    component: ProductDetailComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'customer'
        }

  },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'employees',
    component: EmployeeComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'manager'
    }
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters { }
