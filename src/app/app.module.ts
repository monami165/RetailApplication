import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesAddComponent } from './companies-add/companies-add.component';
import { CompaniesEditComponent } from './companies-edit/companies-edit.component';
import { CompaniesDeleteComponent } from './companies-delete/companies-delete.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';
import { ProductsShopComponent } from './products-shop/products-shop.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CompaniesListComponent,
    CompaniesAddComponent,
    CompaniesEditComponent,
    CompaniesDeleteComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsDeleteComponent,
    ProductsShopComponent,
    ProductsEditComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
