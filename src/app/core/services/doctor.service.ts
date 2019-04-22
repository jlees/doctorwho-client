import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from 'src/app/shared/models/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiSchemaHostPort = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getDoctor(doctor_id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiSchemaHostPort}/api/doctors/${doctor_id}`);  
  }

  getDoctors(): Observable<Doctor[]> {
     return this.http.get<Doctor[]>(`${this.apiSchemaHostPort}/api/doctors`);
  } 

}
