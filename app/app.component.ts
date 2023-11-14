import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Cart,LeaderCart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: ` 
  <app-header [cart]="cart"  [leaderCart]="leaderCart" ></app-header>
  
  <router-outlet></router-outlet>
  `,
  styles: []
  
})
export class AppComponent implements OnInit{
 
  cart:Cart ={ items:[]};
  leaderCart:LeaderCart ={ items:[]};

constructor(private cartService:CartService){}



  ngOnInit() {
    this.cartService.cart.subscribe((_cart)=>{
      this.cart =_cart;
    })

    this.cartService.leaderCart.subscribe((_cart)=>{
      this.leaderCart =_cart;
    })
  }

  
}
