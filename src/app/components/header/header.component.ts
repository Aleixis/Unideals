import { Component, Input } from '@angular/core';
import { Cart, CartItem, LeaderCart,LeaderCartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  [x: string]: any;

  private _cart:Cart= {items:[]};
  itemsQuantity = 0;

  private _leaderCart: LeaderCart= {items:[]};
  leaderItemsQuantity = 0;


  @Input()
  get cart():Cart{
    return this._cart;

  }
  set cart(cart:Cart){
    this._cart=cart;

    this.itemsQuantity= cart.items
    .map((item) =>item.quantity).reduce((prev,current) =>prev+current,0);
  }



  @Input()
  get leaderCart(): LeaderCart{
    return this._leaderCart;

  }
  set leaderCart(leaderCart: LeaderCart) {
    this._leaderCart = leaderCart;
    this.leaderItemsQuantity = leaderCart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
      console.log('Leader Items Quantity:', this.leaderItemsQuantity);
  }
  



  constructor(private cartService:CartService){
  
  }

  getTotal(items:Array<CartItem>):number{
    return this.cartService.getTotal(items);
  
  }

  getLeaderTotal(items: Array<LeaderCartItem>): number {
    // Always return 0, regardless of the items
    return 0;
  }

  onClearCart():void{
    this.cartService.clearCart();
  }


  onClearLeaderCart():void{
    this.cartService.clearLeaderCart();
  }

   onBecomeLeader():void{
    
  }

}
