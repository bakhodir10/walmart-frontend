import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Array<User>;
  user: User;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.loadEmployees();
    this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }

  loadEmployees(){
    this.userService.getList().subscribe(res => {
      this.employees = res;
      console.log(res);
    });
  }

  showLikes(_id){}

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
}
