import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { StaffComponent } from './features/staff/staff.component';
import { ProceduresComponent } from './features/procedures/procedures.component';
import { AnimalsComponent } from './features/animals/animals.component';
import { AddProcedureComponent } from './features/add-procedure/add-procedure.component';
import { AddStaffComponent } from './features/add-staff/add-staff.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'staff',
    component: StaffComponent
  },
  {
    path:'staff/add',
    component: AddStaffComponent
  },
  {
    path:'procedures',
    component: ProceduresComponent
  },
  {
    path:'animals',
    component: AnimalsComponent
  },
  {
    path:'procedures/add',
    component: AddProcedureComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
