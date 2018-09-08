import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  error =  "";

  constructor(private jwtService: JwtService, private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.jwtService.login(this.email, this.password)
      
      .subscribe(
        res => this.router.navigate(['contact-list']),
        err => this.error = 'Authentication Error'
      );
  }

}
