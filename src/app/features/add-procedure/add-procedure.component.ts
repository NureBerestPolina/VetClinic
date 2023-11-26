import { Component } from '@angular/core';
import { AddProcedure } from '../models/add-procedure.model';
import { ProcedureService } from '../services/procedure.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-procedure',
  templateUrl: './add-procedure.component.html',
  styleUrls: ['./add-procedure.component.css']
})
export class AddProcedureComponent {
  model: AddProcedure = {
    name: '',
    price: 0,
    info: null,
  };

  constructor(
    private procedureService: ProcedureService,
    private router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  onFormSubmit(): void {
      this.procedureService.addProcedure(this.model).subscribe({
        next: (response) => {
          console.log('Successful procedure creating!', this.model);
          // redirect to procedure list
          this.router.navigate(['/procedures']);
        },
        error: (error) => {
          alert('ДОДАВАННЯ ПРОЦЕДУР У ВИХІДНІ ЗАБОРОНЕНО');
        },
      });
  }
}
