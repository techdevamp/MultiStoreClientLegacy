import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';
import { RegisterSellerComponent } from './components/register-seller/register-seller.component';
import { SellMyGroceryComponent } from './components/sell-my-grocery/sell-my-grocery.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes =
[

  {
    path: '',
    redirectTo: 'buyer/home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register-user',
    component:  RegisterUserComponent
  },
  {
    path: 'register-seller',
    component: RegisterSellerComponent
  },
  {
    path: 'sell-my-grocery',
    component: SellMyGroceryComponent
  },
  {
    path: 'buyer',
    loadChildren: '../app/modules/buyer/buyer.module#BuyerModule'
  },
  {
    path: 'seller',
    loadChildren: '../app/modules/seller/seller.module#SellerModule'
  },
  {
    path: 'admin',
    loadChildren: '../app/modules/authentication/authentication.module#AuthenticationModule'
  },
// otherwise redirect to home
  {
    path: '**',
    redirectTo: '/login'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
