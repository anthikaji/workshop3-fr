import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string;
  
  title = 'Anthika';
  score = 100;
  colors = ['Red','Green','Blue'] //array
  show = true;
  
}
