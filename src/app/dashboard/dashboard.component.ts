import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{

  constructor(private _router: Router) { }

  logout(){
    // REMOVE the token and navigate to login
    localStorage.removeItem("token");
    this._router.navigateByUrl("/login");
  }

}
