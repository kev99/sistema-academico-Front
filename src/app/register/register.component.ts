import { Component, OnInit } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

public user : string;
public mail: string;
public psw: string;
public mensaje: string;

constructor(private userService : UserServiceService) { }

  ngOnInit() {
  }

  singup(){
        const user= new Usuario (this.user , this.mail , this.psw );
        this.userService.guardoUsuario(user).subscribe(data=>{
          this.mensaje=data.mensaje;
        } , err =>{
          console.error(err)
        })
        
        }
  }
