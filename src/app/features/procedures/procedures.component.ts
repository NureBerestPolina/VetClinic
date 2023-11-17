import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedure } from '../models/procedure.model';
import { ProcedureService } from '../services/procedure.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit{
  procedures$?: Observable<Procedure[]>;
  proceduresBelowAvg$?: Observable<Procedure[]>;

  constructor(
    private procedureService: ProcedureService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   this.procedures$ = this.procedureService.getAllProcedures();
   this.proceduresBelowAvg$ = this.procedureService.getProceduresBelowAvg();
  }
}
