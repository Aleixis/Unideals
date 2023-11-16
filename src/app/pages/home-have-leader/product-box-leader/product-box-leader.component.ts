import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-box-leader',
  templateUrl:'product-box-leader.component.html',
  styles: [
  ]
})
export class ProductBoxLeaderComponent {
  @Input() fullWidthMode =false;
  @Input() product:Product |undefined;
  @Output() addToCart =new EventEmitter();
  @Output() addToLeaderCart =new EventEmitter();


  //isSecondButtonClicked = false;
  constructor(private router: Router,private _snackBar: MatSnackBar) {}


  onAddToLeaderCart():void {
    this.addToLeaderCart.emit(this.product);
   // this.isSecondButtonClicked = true;
    
  }
  
  onAddToCart():void{
   //  if (this.isSecondButtonClicked) {
      this.addToCart.emit(this.product);
    //}
    
      //else{
       // this._snackBar.open('No leader yet,can not buy now', 'ok', {duration:3000});
       // console.log('no leader yet')
      //}
   
  }

  
 
 
}
