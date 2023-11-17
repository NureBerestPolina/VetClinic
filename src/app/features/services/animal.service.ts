import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  
  constructor(private http: HttpClient) {}

  getAllAnimals() : Observable<Animal[]> {
    return this.http.get<Animal[]>('/api/animals');
  }
}
