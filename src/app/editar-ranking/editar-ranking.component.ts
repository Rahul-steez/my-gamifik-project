import { Component, OnInit } from '@angular/core';
import { Rank } from '../userservice/Models/ranking';
import { ApiService } from "../userservice/Service's/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-editar-ranking',
  templateUrl: './editar-ranking.component.html',
  styleUrls: ['./editar-ranking.component.css']
})
export class EditarRankingComponent implements OnInit {

  constructor(private ApiService: ApiService, private router: Router) { }

  Rank: Rank;
  Id_Ranking: number;

  ngOnInit(): void {
    this.Id_Ranking = (JSON.parse((localStorage.getItem('currentRanking'))));
    console.log(this.Id_Ranking);
    this.ApiService.editarRanking(this.Id_Ranking).subscribe(
      datos => {
        if(datos['resultado'] == 'RANKINGED'){
          console.log(datos);
           this.Rank =  JSON.parse(datos['alumnos']);
      }
    });
  }

  GuardarPuntos(){
         
  }
}
