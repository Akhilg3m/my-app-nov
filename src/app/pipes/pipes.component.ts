import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  public name1:string = "abc";
  public name2:string = "XYZ";

  public today:any = new Date();

  public product:any ={
    name:'laptop',
    price:50000
  }

}
