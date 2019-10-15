import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './core/auth-guard.service';
import { AuthService } from './core/auth.service';
import { AdminAuthGuardService } from './core/admin-auth-guard.service';
import { AlertComponent } from './alert/alert.component';
import { ProductsListComponent } from './admin/admin-products/products-list/products-list.component';
import { CategoryService } from './services/category.service';
import { UserService } from './core/user.service';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    ProductsComponent,
    // ShoppingCartComponent,
    // CheckOutComponent,
    // OrderSuccessComponent,
    // MyOrderComponent,
    LoginComponent,
    AlertComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,

    NgbModule,
    FormsModule,
    MatTableModule,
    DataTablesModule,
    MatPaginatorModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
