import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {

  private baseUrl = 'http://localhost:8080/api/inscription';

  constructor(private http: HttpClient) { }

 
  getInscription(id : number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createInscription(inscription: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, inscription);
  }
 
  updateInscription(id : number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteInscription(id : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getInscriptionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getInscriptionsById(id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
 
 



}
