
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesAddComponent } from './companies-add/companies-add.component';
import { CompaniesEditComponent } from './companies-edit/companies-edit.component';
import { CompaniesDeleteComponent } from './companies-delete/companies-delete.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';
import { ProductsShopComponent } from './products-shop/products-shop.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'companies-add', component: CompaniesAddComponent, canActivate: [AuthGuard] },
  { path: 'companies-edit', component: CompaniesEditComponent, canActivate: [AuthGuard] },
  { path: 'companies-delete', component: CompaniesDeleteComponent, canActivate: [AuthGuard] },
  { path: 'products-list', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: 'products-add', component: ProductsAddComponent, canActivate: [AuthGuard] },
  { path: 'products-delete', component: ProductsDeleteComponent, canActivate: [AuthGuard] },
  { path: 'products-shop', component: ProductsShopComponent, canActivate: [AuthGuard] },
  { path: 'products-edit', component: ProductsEditComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
