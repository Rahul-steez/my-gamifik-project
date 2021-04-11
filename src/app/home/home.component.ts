import { Component, OnInit } from '@angular/core';
import { ApiService } from "../userservice/Service's/api.service";
import { User } from '../alumnos';
import { Observable } from 'rxjs';
import { ModificarinfoComponent } from '../modificarinfo/modificarinfo.component';
import { LoginComponent } from '../login/login.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  User: User;

  constructor(public ApiService: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.User = this.ApiService.recojer();
    console.log(this.User[0]);
  }

logout(){
  this.router.navigate(['/login']);
  }
}
