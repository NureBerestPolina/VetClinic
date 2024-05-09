import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedure } from '../models/procedure.model';
import { AddProcedure } from '../models/add-procedure.model';
import { BaseURL } from './staff.service';

@Injectable({
  providedIn: 'root',
})
export class ProcedureService {
  constructor(private http: HttpClient) {}

  getAllProcedures(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(`${BaseURL}/Procedure/GetProcedures`);
  }

  getProceduresBelowPrice(price:Number): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(
      `${BaseURL}/Procedure/GetProceduresBelowPrice?price=${price}`
    );
  }

  getProcedureCountBelowAvg(): Observable<number> {
    return this.http.get<number>(`${BaseURL}/Procedure/GetProceduresBelowAvgCount`);
  }

  addProcedure(procedure: AddProcedure): Observable<Procedure> {
    return this.http.post<Procedure>(
      `${BaseURL}/Procedure/AddProcedure`,
      procedure
    );
  }
}
