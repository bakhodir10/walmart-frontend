import { NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult: string;
  products: Array<Product>;
  pageTitle: string = 'Product List';
  errorMessage: string;
  productToSave: Product;
  constructor(private productService: ProductService,private modalService: NgbModal) {}

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



//////////////////////////////////////////////////////////////////////////

// modalReference: NgbModalRef;

// delete(id) {
//   if (confirm('Would you like to remove it')) {
//     this.productService.deleteOne(id).subscribe(res => {
//       window.alert('Successfully deleted');
//     });
//   }
// }

// edit(id) {
//   console.log('edit');
//   this.productService.getOne(id).subscribe(res => {
//     console.log(res);
//     this.newProduct = {_id: res._id, name: res.name, price: res.price, expire_date: res.expire_date, quantity: res.quantity};
//   });
// }





// save() {
//   console.log('save');

//   this.productToSave = new Product();
//   this.productToSave._id = this.newProduct._id;
//   this.productToSave.name = this.newProduct.name;
//   this.productToSave.price = this.newProduct.price;
//   this.productToSave.expire_date = this.newProduct.expire_date;
//   this.productToSave.quantity = this.newProduct.quantity;
//   this.productService.saveOne(this.productToSave);

//     if (this.newProduct._id === ''){
//       console.log('create');
//       this.productService.saveOne(this.productToSave);
//     }
//     else {
//       console.log('update');
//       console.log(this.productToSave);
//       this.productService.updateOne(this.productToSave).subscribe(res => console.log(res));
//     }

//     this.newProduct = {_id : '', name: '', price:0 , expire_date:new Date(), quantity:0 };
//     this.modalReference.close();
// }


//  newProduct = {_id : '', name: '', price:0 , expire_date:new Date(), quantity:0 };


//   open(content) {
//     this.modalReference = this.modalService.open(content);
//     this.modalReference.result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }


//   private getDismissReason(reason: any){
//     if (reason === ModalDismissReasons.ESC || reason === ModalDismissReasons.BACKDROP_CLICK) {
//       this.newProduct = {_id : '', name: '', price:0 , expire_date:new Date(), quantity:0 };
//     }
//   }

}
