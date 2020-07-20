import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string;
  msgg:string;
  title = 'Anthika';
  score = 100;
  colors = ['Red','Green','Blue'] //array
  show = true;
  firstName = '';
  lastName='';
  

  inputYourName(event : any ):void {
 this.firstName = event.target.value;
  }
  inputLastName(input : string ):void {
    this.lastName = input;
     }
     clickEvent(){
       this.msg = this.firstName;
       this.msgg = this.lastName
    
  }
}
