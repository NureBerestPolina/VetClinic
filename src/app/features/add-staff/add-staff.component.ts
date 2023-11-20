import { Component } from '@angular/core';
import { AddStaff } from '../models/add-staff.model';
import { Staff } from '../models/staff.model';
import { StaffService } from '../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {
  model: AddStaff = {
    firstName: '',
    lastName: '',
    specialtyName: '',
    phone: '',
    email: '',
  };

  constructor(
    private staffService: StaffService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  onFormSubmit(): void {
      this.staffService.addStaff(this.model).subscribe({
        next: (response) => {
          console.log('Successful creating!', this.model);
          // redirect to procedure list
          this.router.navigate(['/staff']);
        },
        error: (error) => {
          console.error('error', error);
        },
      });
  }
}
