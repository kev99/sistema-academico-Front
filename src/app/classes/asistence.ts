import { Student } from './student';
import { Activity } from './activity';

export class Asistence {

    id_asistencia: number;
    alumno  : Student
    actividad  : Activity
    fecha_asistencia: Date;

    public constructor(init?: Partial<Asistence>) {
        Object.assign(this, init);
    }
}