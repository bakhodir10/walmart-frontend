import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';


@Component({
  templateUrl: './product-detail.component.html'

})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  prod: Product;
  product={};
  _id: string;
  constructor(private route: ActivatedRoute,
              private router: Router, private connection: ProductService ) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.connection.getOne(this._id).subscribe(res => {
      this.prod = res;
      this.product = this.prod;
   
    });
  }


  onBack(): void {
    this.router.navigate(['/products']);
  }

}
