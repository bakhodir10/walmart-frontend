import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/Observable';
import {Product} from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Observable<Product>;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getList().subscribe(res => console.log(res));
  }
}
