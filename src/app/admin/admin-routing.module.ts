import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../core/auth-guard.service';
import { AdminAuthGuardService } from '../core/admin-auth-guard.service';
import { ProductsComponent } from '../products/products.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductsListComponent } from './admin-products/products-list/products-list.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

const routers: Routes = [
  { path: '', component: AdminComponent, 
    canActivate: [AuthGuardService, AdminAuthGuardService],
    children: [ 
      { path: '', component: AdminProductsComponent,canActivate: [AuthGuardService, AdminAuthGuardService] },
      // { path: 'admin/products', component: AdminProductsComponent, canActivateChild: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/new', component: ProductsListComponent, canActivateChild: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/:id', component: ProductsListComponent, canActivateChild: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivateChild: [AuthGuardService, AdminAuthGuardService] },
    ] 
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routers)],
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
