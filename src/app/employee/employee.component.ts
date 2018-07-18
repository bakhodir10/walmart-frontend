import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user.model';
import {AuthService} from '../auth/auth.service';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import * as EmployeeActions from '../action/employee.action';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

interface AppState {
  user: User;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  modalReference: NgbModalRef;
  employees: Array<User>;
  employees$: Observable<User>;
  currentUser: User;
  userToSave: User;
  newEm = {_id: '', name: '', email: '', role: '', password: ''};
  roles = [
    {name: 'manager', value: 1},
    {name: 'employee', value: 2},
  ];
  closeResult: string;

  constructor(private userService: UserService,
              private authService: AuthService,
              private modalService: NgbModal,
              private store: Store<AppState>) {
    this.employees$ = store.pipe(select('employee'));
  }

  ngOnInit() {
    this.loadEmployees();
    this.currentUser = this.authService.getCurrentUser();
  }

  loadEmployees() {
    this.userService.getList().subscribe(res => {
      this.employees = res;
      const list = res;
      console.log(res);
      this.store.dispatch({
        type: EmployeeActions.GET,
        payload: {
          list
        }
      });
    });
  }

  delete(id) {
    if (confirm('Would you like to remove it')) {
      this.userService.deleteOne(id).subscribe(res => {
        this.store.dispatch({
          type: EmployeeActions.DELETE,
          payload: { id }
        });
        window.alert('Successfully deleted');
      });
    }
  }

  edit(id) {
    console.log('edit');
    this.userService.getOne(id).subscribe(res => {
      console.log(res);
      this.newEm = {_id: res._id, name: res.name, password: res.password, email: res.email, role: res.role};
    });
  }

  save() {

    this.userToSave = new User();
    this.userToSave._id = this.newEm._id;
    this.userToSave.email = this.newEm.email;
    this.userToSave.password = this.newEm.password;
    this.userToSave.name = this.newEm.name;
    this.userToSave.role = this.newEm.role;

    if (this.newEm._id === '') {
      this.userService.saveOne(this.userToSave).subscribe(res => {
        console.log(res);
        this.store.dispatch({
          type: EmployeeActions.CREATE,
          payload: {user: res}
        });
      });

    }
    else {
      this.userService.updateOne(this.userToSave).subscribe(res => {
        console.log(res);
        this.store.dispatch({
          type: EmployeeActions.UPDATE,
          payload: {user: res}
        });
      });
    }

    this.newEm = {_id: '', name: '', email: '', role: '', password: ''};
    this.modalReference.close();
  }


  notify() {
    this.userService.notify().subscribe(res => {
      window.alert('successfully sent!');
    });
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any) {
    if (reason === ModalDismissReasons.ESC || reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.newEm = {_id: '', name: '', email: '', role: '', password: ''};
    }
  }
}
