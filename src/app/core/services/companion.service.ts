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

  private apiSchemaHostPort = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCompanion(companion_id: number): Observable<Companion> {
    return this.http.get<Companion>(`${this.apiSchemaHostPort}/api/companions/${companion_id}`);  
  }

  getCompanions(): Observable<Companion[]> {
     return this.http.get<Companion[]>(`${this.apiSchemaHostPort}/api/companions`);
  } 

  saveCompanion(companion: Companion): Observable<any> {
    if (companion.id) {
      return this.http.put(`${this.apiSchemaHostPort}/api/companions/${companion.id}`, companion, httpOptions);
    }
    return this.http.post(`${this.apiSchemaHostPort}/api/companions`, companion, httpOptions);
  }

  deleteCompanion(companion_id: number): Observable<Companion> {
    return this.http.delete<Companion>(`${this.apiSchemaHostPort}/api/companions/${companion_id}`);  
  }

}
