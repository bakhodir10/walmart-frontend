import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Product } from './product.model';


@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './product-detail.component.html',

})
export class ProductDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  
  }

}
