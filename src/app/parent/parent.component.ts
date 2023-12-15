import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  public ap:string = "";
  public bp:string = "";

  catch(value:any){
    this.bp = value;
  }

  constructor() { }



}
