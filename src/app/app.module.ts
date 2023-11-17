import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { StaffComponent } from './features/staff/staff.component';
import { ProceduresComponent } from './features/procedures/procedures.component';
import { AnimalsComponent } from './features/animals/animals.component';
import { AddProcedureComponent } from './features/add-procedure/add-procedure.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StaffComponent,
    ProceduresComponent,
    AnimalsComponent,
    AddProcedureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
