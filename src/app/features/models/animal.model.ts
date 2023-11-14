import { Owner } from "./owner.model";
import { Specialty } from "./specialty.model";

export interface Animal {
    animalId: number;
    name: string;
    species: string;
    breed: Specialty;
    dateOfBirth: string;
    ownerId: number;
    owner: Owner;
}