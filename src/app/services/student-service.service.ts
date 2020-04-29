import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
 
  private baseUrl = 'http://localhost:8080/api/student';
 
  constructor(private http: HttpClient) { }
 
  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createCustomer(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, student);
  }
 
  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getCustomersById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}