import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Subscription, from } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  

  products: Product[];
  subscription: Subscription;
  filterProd: any[];
  // tableResource: DataTableResource<Product>;
  items: Product[];
  itemCount: number;
  displayedColumns: string[] = ['Name', 'Category', 'Price', 'Description'];
  dataSource = [];

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
    this.subscription = this.productService.getAllProducts().subscribe(rs => {
      this.filterProd = this.products = rs;
      this.dataSource = this.filterProd;
      // this.initializeTable(this.products);
    });
  }

  delete(productId) {
    if (confirm('Are you sure, you want to delete this products?')) {
      this.productService.delete(productId);
      this.router.navigate(['/admin/products']);
    }
  }

  filter(query: string) {
    this.filterProd = (query) ?
    this.products.filter(f => f.name.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // private initializeTable(products: Product[]) {
  //   this.tableResource = new DataTableResource(products);
  //   this.tableResource.query({ offset: 0 })
  //   .then(items => this.items = items);

  //   this.tableResource.count().then(count => this.itemCount = count);
  // }
}
