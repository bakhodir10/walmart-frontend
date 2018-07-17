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
  products: Array<Product>;
  pageTitle: string = 'Product List';
  errorMessage: string;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getList().subscribe(res => {
      console.log(res);
      this.products = res
    });
  }

  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List: ' + message;
  }

  delete(id){
    if (confirm('Would you like to remove it')){
        this.productService.deleteOne(id).subscribe(res => {
          window.alert('Successfully deleted');
        });
    }
  }

}
