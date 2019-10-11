import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductsListComponent } from './admin-products/products-list/products-list.component';
import { AuthGuardService } from '../core/auth-guard.service';
import { AdminAuthGuardService } from '../core/admin-auth-guard.service';
import { MatTableModule } from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    MatTableModule,
    DataTablesModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
  ]
})
export class AdminModule { }
