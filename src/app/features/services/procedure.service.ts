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

  getProceduresBelowAvg(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(
      `${BaseURL}/Procedure/GetProceduresBelowAvg`
    );
  }

  addProcedure(procedure: AddProcedure): Observable<Procedure> {
    return this.http.post<Procedure>(
      `${BaseURL}/Procedure/AddProcedure`,
      procedure
    );
  }
}
