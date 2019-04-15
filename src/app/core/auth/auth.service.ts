import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Role } from 'src/app/shared/models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'http://localhost:8080/login';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  loginErrorExists: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;  
  }
   
  hasWritePermission(): boolean {
    return this.currentUserValue.roles.includes(Role.WRITE);
  }

  login(username: string, password: string) {
    this.loginErrorExists = false;
    this.http.post(this._loginUrl, {username: username, password: password}, {observe: 'response'})
    .subscribe(
      (resp: any) => {
        let token = resp.headers.get("Authorization").replace('Bearer ', '');
        let user = new User();
        user.username = username;
        user.token = token;
        const jwtHelper = new JwtHelperService();
        user.roles = jwtHelper.decodeToken(token).scopes.split(',') || [Role.READ];
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigate(['companions']);
      },
      (err: any) => {
        this.loginErrorExists = true; 
      }
    );
  };    

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['home']);
  };    

}
