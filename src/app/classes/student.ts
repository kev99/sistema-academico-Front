export class Student {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    fecha_nacimiento : Date;
    mail: string;
    obra_social: string;
    cert_medico : string;
    num_socio: number;
    estado_cuota: boolean;


    public constructor(init?: Partial<Student>) {
        Object.assign(this, init);
    }

}