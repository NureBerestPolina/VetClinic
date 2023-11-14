import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { StaffComponent } from './features/staff/staff.component';
import { ProceduresComponent } from './features/procedures/procedures.component';
import { AnimalsComponent } from './features/animals/animals.component';

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
    path:'procedures',
    component: ProceduresComponent
  },
  {
    path:'animals',
    component: AnimalsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
