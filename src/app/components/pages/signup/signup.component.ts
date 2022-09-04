import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
email="";
username="";
password="";
Rpassword="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
this.router.navigate(['login']);
  }
  register(){
    this.router.navigate(['home']);
  }
}
