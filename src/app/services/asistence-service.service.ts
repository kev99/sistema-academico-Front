import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenceServiceService {
  private baseUrl = 'http://localhost:8080/api/assistence';

  constructor(private http: HttpClient) { }

  getAssistence(id : number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAssistence(asis: any)  {
    console.log(asis );
    return this.http.post<any>(`${this.baseUrl}` + `/create`, asis );
  }

  updateAssistence(id : number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAssistence(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAssistencesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAssistencesByStudentId(id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
  
}
