export class Activity {
  
    id_a : number ;
    nivel : string ;
    categoria : string ;
    edad : string;
    dias_practica: string;
    valor : number ;


    public constructor(init?: Partial<Activity>) {
        Object.assign(this, init);
    }
}