import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Permission } from 'src/app/shared/models/permission';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'http://localhost:8080/login';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  loginErrorExists: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;  
  }
   
  hasPermission(permission: Permission): boolean {
    return this.currentUserValue.permissions.includes(permission);
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
        user.permissions = jwtHelper.decodeToken(token).scopes.split(',') || [Permission.SELECT_COMPANION, Permission.SELECT_DOCTOR];
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigate(['companions']);
      },
      (err: any) => {
        this.loginErrorExists = true; 
      }
    );
  };    

  logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['home']);
  };    

}
