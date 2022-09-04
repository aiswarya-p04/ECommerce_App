import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg = "";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    if (this.username.trim().length == 0)
      this.errorMsg = "Username cannot be empty";
    else if (this.password.trim().length == 0)
      this.errorMsg = "Password cannot be empty";
    else {
      let res = this.auth.login(this.username, this.password);
      if (res === 200)
        this.router.navigate(['home']);
      else {
        this.errorMsg = "Wrong credentials";
      }
    }
  }
}
