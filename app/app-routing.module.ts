import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { LeaderComponent } from './pages/leader/leader.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [{
  path:'home',
  component:HomeComponent

},

{ path: 'leader', 
component: LeaderComponent },

{
  path:'cart',
  component:CartComponent

},

{
  path:'checkout',
  component:CheckoutComponent

},

{
  path:'',redirectTo:'home', pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
