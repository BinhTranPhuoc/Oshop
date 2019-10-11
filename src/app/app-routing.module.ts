import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth-guard.service';
import { AdminAuthGuardService } from './core/admin-auth-guard.service';
import { ProductsListComponent } from './admin/admin-products/products-list/products-list.component';

const routers: Routes  = [

  { path: '',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  
  { path: 'login', 
    component: LoginComponent
  }

  // { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
  // { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  // { path: 'my/order', component: MyOrderComponent, canActivate: [AuthGuardService] },
  // { path: 'products', component: ProductsComponent },
  // { path: 'shopping-cart', component: ShoppingCartComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
