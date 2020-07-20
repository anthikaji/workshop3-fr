import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lists = [];
  doneLists = [];
  save(toDo){
    if(toDo.trim() !== '')
    {this.lists.push(toDo);}
  }
  updateLists(done){
    if(this.doneLists.indexOf(done) !== -1){
    this.doneLists.splice(this.doneLists.indexOf(done),1);
  
  }
  
    else{
      this.doneLists.push(done);}
    }

}
