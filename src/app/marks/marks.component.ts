import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {

  public students:any = [
    {name:'a',marks:100,grade:'a'},
    {name:'b',marks:80,grade:'b'},
    {name:'c',marks:70,grade:'c'},
    {name:'d',marks:30,grade:'fail'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
