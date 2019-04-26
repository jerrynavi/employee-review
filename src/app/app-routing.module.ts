import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RateEmployeeComponent } from './rate-employee/rate-employee.component';

const routes: Routes = [
  {
    path: 'start', component: StartComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'add-employee', component: AddEmployeeComponent
  },
  {
    path: 'rate-employee/:id', component: RateEmployeeComponent
  },
  {
    path: '', redirectTo: '/start', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
