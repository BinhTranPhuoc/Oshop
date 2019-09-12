import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  categories;
  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
  ) {
    this.categories = categoryService.getCategories();
  }

  ngOnInit() {
  }

  addProduct(product) {
    this.productService.creatProduct(product);
  }

}
