import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  categories;
  product = {};
  id;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    categoryService: CategoryService,
    private productService: ProductService,
  ) {
    this.categories = categoryService.getCategories();
    this.updateProduct();
  }

  ngOnInit() {
  }

  addProduct(product) {
    if (this.id) {
      this.productService.updateProduct(this.id, product);
    } else {
      this.productService.creatProduct(product);
    }
    this.router.navigate(['/admin/products']);
  }

  updateProduct() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).take(1).subscribe( rs => this.product = rs);
    }
  }

  delete() {
    if (confirm('Are you sure, you want to delete this products?')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }

  }
}
