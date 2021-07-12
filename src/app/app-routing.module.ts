import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutGuard } from 'server/logout.guard';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"employ",
    component:EmployeeComponent,
    canActivate:[LogoutGuard]
  },
  {
    path:"addemploy",
    component:AddemployeeComponent
  },
  {
    path:"header",
    component:HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
