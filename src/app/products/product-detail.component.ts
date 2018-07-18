import { User } from './../../../../lab11/src/app_14/form.component';
import { Feedback } from './../feedback/feedback.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { AuthService } from '../auth/auth.service';


@Component({
  templateUrl: './product-detail.component.html'

})
export class ProductDetailComponent implements OnInit {
  
  pageTitle: string = 'Product Detail';
  prod: Product;
  product={};
  feedback: Feedback;
  _id: string;
  currentUser: User;
  constructor(private route: ActivatedRoute,
              private router: Router, private connection: ProductService,private authService: AuthService) { 
                this.currentUser = this.authService.getCurrentUser();
              }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.connection.getOne(this._id).subscribe(res => {
      this.prod = res;
      this.product = this.prod;
       console.log(this.product);
    });
  }

  newfeedback = {user_id: '', comment: '', rate:0, comment_date: ''};

  submit(){
      this.feedback = new Feedback();
      this.feedback.user_id = this.currentUser.name;
      console.log(this.feedback.user_id);
      this.feedback.rate = this.newfeedback.rate;
      this.feedback.comment =this.newfeedback.comment;
      this.feedback.comment_date =new Date();
      console.log(this.feedback);
      this.connection.saveFeedback(this.feedback, this._id).subscribe(res => console.log(res));

    }

    


  onBack(): void {
    this.router.navigate(['/products']);
  }

}
