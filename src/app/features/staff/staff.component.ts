import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff.model';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  staff$?: Observable<Staff[]>;

  constructor(
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
   this.staff$ = this.staffService.getStaff();
  }
}
