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
  // products: Observable<Product>;
  pageTitle: string = 'Product List';
  errorMessage: string;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getList().subscribe(res => console.log(res));
  }

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.perfromFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[];
  products: Product[];

  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List: ' + message;
  }

  perfromFilter(filterBy: string): Product[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  OnInit(): void {
    this.productService.getList().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }
}
