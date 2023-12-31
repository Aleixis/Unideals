import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule} from '@angular/material/grid-list';
import {  MatMenuModule} from '@angular/material/menu';
import {  MatButtonModule} from '@angular/material/button';
import {  MatCardModule} from '@angular/material/card';
import {  MatIconModule} from '@angular/material/icon';
import {  MatExpansionModule} from '@angular/material/expansion';
import { MatListModule} from '@angular/material/list';
import {  MatToolbarModule} from '@angular/material/toolbar';
import {  MatTableModule} from '@angular/material/table';
import {  MatBadgeModule} from '@angular/material/badge';
import {  MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';
import { LeaderComponent } from './pages/leader/leader.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeHaveLeaderComponent } from './pages/home-have-leader/home-have-leader.component';
import { ItemsComponent } from './pages/items/items.component';
import { ProductBoxLeaderComponent } from './pages/home-have-leader/product-box-leader/product-box-leader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent,
    LeaderComponent,
    CheckoutComponent,
    HomeHaveLeaderComponent,
    ItemsComponent,
    ProductBoxLeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    HttpClientModule,


  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
