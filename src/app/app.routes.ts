import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuardService as AuthGuard, AuthGuardService } from './auth/auth-guard.service';
import { RoleGuardService as RoleGuard, RoleGuardService } from './auth/role-guard.service';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    {path: 'login', component: LoginComponent},
    {
      path: 'employees',
      component: EmployeeComponent,
      canActivate: [RoleGuard],
      data: {
        expectedRole: 'manager'
      }
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuardService, AuthService, RoleGuardService],
})
export class AppRouters { }
