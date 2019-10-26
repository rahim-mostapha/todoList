import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private jwt : JwtService , private router : Router) { }

  isLogein : boolean;
  ngOnInit() {
    this.isLogein = !this.jwt.isTokenExpire();
  }

  logOut(){
    this.jwt.resetToken();
    this.isLogein = false;
    this.router.navigate(['/login']);
  }

}
