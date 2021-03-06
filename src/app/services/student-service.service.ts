import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
 
  private baseUrl = 'http://localhost:8080/api/student';
 
  constructor(private http: HttpClient) { }
 
  getStudent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, student);
  }
 
  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getStudentsByDni(dni: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${dni}`);
  }
 
  
}