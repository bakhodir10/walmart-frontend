import { NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../products/product.service';
import { Product } from '../products/product.model';
import { AuthService } from '../auth/auth.service';
import { User } from '../user/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult: string;
  products: Array<Product>;
  productToSave: Product;
  currentUser: User;
  constructor(private productService: ProductService,private modalService: NgbModal, private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser();
  }
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getList().subscribe(res => {
      console.log(res);
      this.products = res
    });
  }
}
