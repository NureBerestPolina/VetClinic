import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedure } from '../models/procedure.model';
import { ProcedureService } from '../services/procedure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit{
  procedures$?: Observable<Procedure[]>;
  proceduresBelowAvg$?: Observable<Procedure[]>;
  proceduresWithPriceBelowAvgCount: number = 0;
  priceInput: number = 0;

  constructor(
    private procedureService: ProcedureService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
   this.procedures$ = this.procedureService.getAllProcedures();
   this.fetchProcedureCount();

  }

  fetchProcedureCount() {
    this.procedureService.getProcedureCountBelowAvg().subscribe(
      (count) => {
        this.proceduresWithPriceBelowAvgCount = count;
      },
      (error) => {
        console.error('Error fetching procedure count:', error);
      }
    );
  }

  submitForm() {
    this.proceduresBelowAvg$ = this.procedureService.getProceduresBelowPrice(this.priceInput);
  }
}
