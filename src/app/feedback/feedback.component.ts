import { Feedback } from './feedback.model';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
 
  @Input() feedback: Array<Feedback>;

  ngOnInit() {
    console.log('come');
    console.log('come');
    console.log(this.feedback);
  }
}
