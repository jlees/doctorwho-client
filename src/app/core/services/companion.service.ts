import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Companion } from 'src/app/shared/models/companion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CompanionService {

  constructor(private http: HttpClient) { }

  getCompanion(companion_id: number): Observable<Companion> {
    return this.http.get<Companion>(`http://localhost:8080/api/companions/${companion_id}`);  
  }

  getCompanions(): Observable<Companion[]> {
     return this.http.get<Companion[]>("http://localhost:8080/api/companions");
  } 

  saveCompanion(companion: Companion): Observable<any> {
    return this.http.put(`http://localhost:8080/api/companions/${companion.id}`, companion, httpOptions);
  }

}
