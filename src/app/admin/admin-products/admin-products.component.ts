import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private productService: ProductService
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

  delete(productId) {
    if (confirm('Are you sure, you want to delete this products?')) {
      this.productService.delete(productId);
      this.router.navigate(['/admin/products']);
    }
  }
}
