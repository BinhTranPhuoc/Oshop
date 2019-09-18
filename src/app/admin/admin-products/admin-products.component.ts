import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products;
  constructor(
    private router: Router,
    private productService: ProductService,
    private productList: ProductsListComponent,
  ) {
    this.getlistproducts();
   }

  ngOnInit() {
  }

  addProduct() {
    this.router.navigate(['admin/products/new']);
  }

  getlistproducts() {
    this.products = this.productService.getAllProducts();
  }

  delete() {
    this.productList.delete();
  }
}
