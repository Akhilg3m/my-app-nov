import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  public names : string[] = ['ajay','pavan','naveen','rajesh','suresh',]

  public states : string[] = ['andhrapradesh','telanagana','kerala']

  public products :any =[
    {name:'pen',price:30},
    {name : 'pencil',price:10},
    {name : 'book',price:40}
  ]
  
  public num :number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
