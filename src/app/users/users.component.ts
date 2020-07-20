import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  msg :string;
  firstName = [];
  lastName=[];
  show = true;
  users= [] //array
  unusers = []

  inputYourName(event : any ):void {
 this.firstName = event.target.value;
  }
  inputLastName(input : any ):void {
    this.lastName = input;
     }
  clickEvent(){
       //this.msg = this.firstName + ' ' +this.lastName; //String concat
       this.msg =`${this.firstName} ${this.lastName}`;
      
       //Append to list/array
       this.users.push(this.msg);
  }

 
}
