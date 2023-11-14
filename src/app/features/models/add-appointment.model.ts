import { AnimalStaff } from "./animal-staff.model";
import { Procedure } from "./procedure.model";

export interface AddAppointment {
    appointmentDate: Date;
    notes: string;
    procedureId: number;
    animalStaffId: number;
}