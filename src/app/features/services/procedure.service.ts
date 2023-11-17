import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedure } from '../models/procedure.model';
import { AddProcedure } from '../models/add-procedure.model';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http: HttpClient) {}

  getAllProcedures() : Observable<Procedure[]> {
    return this.http.get<Procedure[]>('/api/procedures');
  }

  getProceduresBelowAvg() : Observable<Procedure[]> {
    return this.http.get<Procedure[]>('/api/procedures/below-avg');
  }

  addProcedure(procedure: AddProcedure): Observable<Procedure> {
    return this.http.post<Procedure>(`/api/procedures`, procedure);
  }

}
