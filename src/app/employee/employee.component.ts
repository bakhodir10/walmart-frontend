import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees(){
    this.userService.getList().subscribe(res => console.log(res));
  }

}
