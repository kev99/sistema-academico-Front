import { Injectable } from '@angular/core';
import { CanActivate,  } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './services/user-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService : UserServiceService ){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  
}
