
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';



@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
 
  
  constructor(private userService: UserService,private user:User){}
   
  signUp(){
     
    this.user.role="customer";
    
      console.log(this.user);
       this.userService.saveOne(this.user);
     }
  }
  

