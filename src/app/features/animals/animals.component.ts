import { Component } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { Animal } from '../models/animal.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {
  animals$?: Observable<Animal[]>;

  constructor(
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
   this.animals$ = this.animalService.getAllAnimals();
  }
}
