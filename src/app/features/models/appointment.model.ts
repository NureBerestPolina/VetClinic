import { AnimalStaff } from "./animal-staff.model";
import { Procedure } from "./procedure.model";

export interface Appointment {
    appointmentId: number;
    appointmentDate: Date;
    notes: string;
    procedureId: number;
    procedure: Procedure;
    animalStaffId: number;
    animalStaff: AnimalStaff;
}