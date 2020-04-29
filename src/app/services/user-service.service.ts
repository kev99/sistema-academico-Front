import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }



public guardoUsuario(user: Usuario) :any {

return this.http.post('http://localhost:8080/guardoUsuario',user);

}


}
