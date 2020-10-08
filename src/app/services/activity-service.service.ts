import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService  {
 
  private baseUrl = 'http://localhost:8080/api/activity';
 
  constructor(private http: HttpClient) { }
 
  getActivity(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createActivity(activity: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, activity);
  }
 
  updateActivity(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteActivity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getActivitiesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getActivityiesById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
 
  
}