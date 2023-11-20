import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from '../models/staff.model';
import { Observable } from 'rxjs';
import { AddStaff } from '../models/add-staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) {}

  getStaff() : Observable<Staff[]> {
    return this.http.get<Staff[]>('/api/staff');
  }

  addStaff(staff: AddStaff): Observable<Staff> {
    return this.http.post<Staff>(`/api/staff`, staff);
  }
}
