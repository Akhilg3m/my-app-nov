import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'structureldirectives', component:StructuralDirectivesComponent},
    {path:'data-bindings', component:DataBindingsComponent},
    {path:'marks', component: MarksComponent},
    {path:'pipes', component:PipesComponent},
    {path:'event', component:EventComponent},
    {path:'cars', component:CarsComponent},
    {path:'products', component:ProductsComponent},
    {path:'users', component:UsersComponent},
    {path:'create-user', component:CreateUserComponent},
    {path:'user-form', component: UserFormComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }