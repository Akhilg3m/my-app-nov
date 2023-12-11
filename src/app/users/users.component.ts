import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{

  public users:any = [];

  public term:string = "";
  public column:string = "";
  public order:string = "";
  public pageno:number=0;

  constructor(private _userService:UserService){

    _userService.getUsers().subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
    
  }
  getFilteredUsers(){

    this._userService.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }

  sort(){

    this._userService.getSortedUsers(this.column, this.order).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }

  page(){
    this._userService.getPagedUsers(this.pageno).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  delete(id:string){
    this._userService.deleteUser(id).subscribe(
      (data:any)=>{
          alert("deleted succesfully");
          location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }




}
