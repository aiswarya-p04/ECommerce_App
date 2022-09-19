import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = "";
  username = "";
  password = "";

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }
  getSignInFormData(data: any) {

    this.auth.register(data).subscribe((cust) => {
      console.log(cust);
      alert("User Registered!! Enter credentials to login");
      this.router.navigate(['login']);
    })
  }
  login() {
    this.router.navigate(['login']);
  }
}
