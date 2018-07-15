import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'products', component: ProductsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouters { }