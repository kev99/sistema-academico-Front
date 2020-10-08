import { Student } from './student';
import { Activity } from './activity';

export class Inscription {
    
   
    id: number;
    alumno  : Student
    actividad  : Activity
    fecha_ins: Date;

    public constructor(init?: Partial<Inscription>) {
        Object.assign(this, init);
    }
    
}