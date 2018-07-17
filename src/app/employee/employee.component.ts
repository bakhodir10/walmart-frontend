import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user.model';
import { AuthService } from '../auth/auth.service';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  modalReference: NgbModalRef;
  employees: Array<User>;
  currentUser: User;
  user: User;
  newEm = {name: '', email: '', role: '', password: ''};
  roles = [
    { name: 'customer', value: 1 },
    { name: 'employee', value: 2 },
    { name: 'manager', value: 3 }
  ];
  closeResult: string;

  constructor(private userService: UserService,
               private authService: AuthService,
               private modalService: NgbModal) { }

  ngOnInit() {
    this.loadEmployees();
    this.currentUser = this.authService.getCurrentUser();
  }

  loadEmployees(){
    this.userService.getList().subscribe(res => {
      this.employees = res;
      console.log(res);
    });
  }

  notify(){
    this.userService.notify().subscribe(res => {
      window.alert('successfully sent!');
    });
  }

  delete(id){
    if (confirm('Would you like to remove it')){
        this.userService.deleteOne(id).subscribe(res => {
          window.alert('Successfully deleted');
        });
    }
  }

  open(content) {
   this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
  }

  edit(id){
    this.userService.getOne(id).subscribe(res => {
      this.user = res;
    });
  }

  save(){
    console.log(this.newEm);
    if(this.user._id == undefined){
      this.user = new User();  
      this.user.email = this.newEm.email;
      this.user.password = this.newEm.password;
      this.user.name = this.newEm.name;
      this.user.role = this.newEm.role;
      this.userService.saveOne(this.user);
    }
    this.modalReference.close();
  }
}
