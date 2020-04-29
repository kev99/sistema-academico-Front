
export class Usuario {


public name : string;
public mail: string;
public psw: string;


constructor(name: string , mail: string , psw: string){
    
    this.name=name;
    this.mail=mail;
    this.psw=psw;
}
public getName(){
    return this.name;
}
public getMail (){
    return this.mail;
}
public getPassword(){ 
    return this.psw;
}
}
