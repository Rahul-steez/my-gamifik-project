import { Component, OnInit } from '@angular/core';
import { User } from '../userservice/Models/alumnos';
import { ApiService } from "../userservice/Service's/api.service";
import { Profesor } from '../userservice/Models/profesor';
import { ModificarinfoprofeComponent } from '../modificarinfoprofe/modificarinfoprofe.component';
import { RankingComponent } from '../ranking-profe/ranking.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-homeprof',
  templateUrl: './homeprof.component.html',
  styleUrls: ['./homeprof.component.css']
})
export class HomeprofComponent implements OnInit {
  Profesor: Profesor;
  constructor(public ApiService: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.Profesor = (JSON.parse((localStorage.getItem('currentUser'))));
    console.log(this.Profesor);
  }

  logout() {
    this.ApiService.logout();
    this.router.navigate(['/login']);
  }
}
