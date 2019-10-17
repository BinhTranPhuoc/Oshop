import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Subscription, from } from 'rxjs';
import { Product } from 'src/app/models/product';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit,  OnDestroy {

  products: Product[];
  subscription: Subscription;
  filterProd: any[];
  // tableResource: DataTableResource<Product>;
  items: Product[];
  itemCount: number;
  displayedColumns: string[] = ['Name', 'Category', 'Price', 'Description'];
  dataSource = MatTableDataSource[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    private router: Router,
    private productService: ProductService
   ) { 
    this.getlistproducts();
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
}
