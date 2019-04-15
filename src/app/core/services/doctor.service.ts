import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from 'src/app/shared/models/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
     return this.http.get<Doctor[]>("http://localhost:8080/api/doctors");
  } 

}
