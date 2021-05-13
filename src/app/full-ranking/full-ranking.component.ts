import { Component, OnInit } from '@angular/core';
import { Rank } from '../userservice/Models/ranking';
import { ApiService } from "../userservice/Service's/api.service";

@Component({
  selector: 'app-full-ranking',
  templateUrl: './full-ranking.component.html',
  styleUrls: ['./full-ranking.component.css']
})
export class FullRankingComponent implements OnInit {

  constructor(private ApiService: ApiService) { }
  Rank: Rank;
  Id_Ranking: number;

  ngOnInit(): void {
    this.Id_Ranking = (JSON.parse((localStorage.getItem('currentRanking'))));
    this.ApiService.editarRanking(this.Id_Ranking).subscribe(
      datos => {
        if(datos['resultado'] == 'RANKINGED'){
          console.log(datos);
           this.Rank =  JSON.parse(datos['alumnos']);
      }
    });
  }

}
