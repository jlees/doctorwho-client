import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') form: any;
  
  model = new User();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.form.form.valueChanges.subscribe(x => {
      this.authService.loginErrorExists = false;
    });    
  }

  login() {
      if (this.form.valid) {
        console.log("you are logging in");
        this.authService.login(this.model.username, this.model.password)   
      } else {
        console.log("form is invalid");
      }
  }

  displayGeneralLoginError(): boolean {
    return this.authService.loginErrorExists;
  }

}
