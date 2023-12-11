import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.scss']
})
export class DataBindingsComponent implements OnInit {

  public age:number = 20;

  public isValid:boolean = true;

  public phone:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    alert("cancel clicked");
  }

}
