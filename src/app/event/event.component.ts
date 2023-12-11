import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  public name:string = "";
  public names:string[] = [];

  submit(){
    this.names.push(this.name);
    this.name="";
  }

  delete(){
    this.names.pop();
  }

}
