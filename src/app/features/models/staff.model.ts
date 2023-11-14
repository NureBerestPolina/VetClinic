import { Specialty } from "./specialty.model";

export interface Staff {
    staffId: number;
    firstName: string;
    lastName: string;
    specialtyId: number;
    specialty: Specialty;
    phone: string;
    email: string;
}