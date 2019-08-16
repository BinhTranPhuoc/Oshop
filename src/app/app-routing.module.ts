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
import { AuthService } from './core/auth.service';

const routers: Routes  = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthService] },
  { path: 'my/order', component: MyOrderComponent, canActivate: [AuthService] },

  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthService] },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
