import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ICustomer } from 'src/app/shared/customer';

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
  customer: ICustomer[] = [];
  ngOnInit(): void {
    this.auth.loadLogin().subscribe(data => {
      this.customer = data;
      // console.log(this.customer);

    })
  }
  login() {
    if (this.username.trim().length == 0)
      this.errorMsg = "Username cannot be empty";
    else if (this.password.trim().length == 0)
      this.errorMsg = "Password cannot be empty";
    else {
      // let res = this.auth.login(this.username, this.password);
      // this.auth.loadLogin();

      let res = this.customer.filter(cust => cust.name === this.username && cust.password === this.password);

      if (res.length > 0) {
        this.router.navigate(['home']);
        // console.log(res)
      }
      else {
        this.errorMsg = "Wrong credentials";
        // console.log(res)
      }
    }
  }
  signup() {
    this.router.navigate(['signup']);
  }
}
