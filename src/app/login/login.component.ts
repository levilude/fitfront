import {Component, OnInit} from '@angular/core';
import { LoginService } from './login.service';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
//import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string = '';
  password: string = '';
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  invalidLogin = false;
  loginSuccess = false;

  constructor(private loginService: LoginService,
              private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  handleLogin(){
    console.log("clicked");

    this.loginService.login(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      this.router.navigate(['/client']);
      //redirect to main page
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

}
