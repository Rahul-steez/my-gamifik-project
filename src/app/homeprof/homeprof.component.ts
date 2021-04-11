import { Component, OnInit } from '@angular/core';
import { User } from '../alumnos';
import { ApiService } from "../userservice/Service's/api.service";
import { Profesor } from '../profesor';
import { ModificarinfoprofeComponent } from '../modificarinfoprofe/modificarinfoprofe.component';


@Component({
  selector: 'app-homeprof',
  templateUrl: './homeprof.component.html',
  styleUrls: ['./homeprof.component.css']
})
export class HomeprofComponent implements OnInit {
  Profesor: Profesor;
  constructor(public ApiService: ApiService) { }

  ngOnInit(): void {
    this.Profesor = this.ApiService.recojerprofe();
    console.log(this.Profesor);
  }
}
