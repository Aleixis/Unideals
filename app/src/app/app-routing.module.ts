import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LeaderComponent } from './pages/leader/leader.component';
import { ItemComponent } from './pages/item/item.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {
  path:'home',
  component:HomeComponent

},

{
  path:'cart',
  component:CartComponent

},

{
  path:'introduction',
  component:IntroductionComponent

},


{
  path:'checkout',
  component:CheckoutComponent

},

{
  path:'leader',
  component:LeaderComponent

},

{
  path:'item',
  component:ItemComponent

},

{
  path:'',redirectTo:'introduction', pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
