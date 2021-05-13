import { Component, OnInit } from '@angular/core';
import { ApiService } from "../userservice/Service's/api.service";
import { Router } from "@angular/router";
import { User } from '../userservice/Models/alumnos';
import { Ranking } from '../userservice/Models/lista';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-ranking-alumno',
  templateUrl: './ranking-alumno.component.html',
  styleUrls: ['./ranking-alumno.component.css']
})
export class RankingAlumnoComponent implements OnInit {
  

  constructor(private ApiService: ApiService, private router: Router, private formBuilder: FormBuilder) { }

  displayForm = false;
  displayTable = false;
  submitted = false;
  Ranking: Ranking;
  id: number;
  registerForm: FormGroup;
  User: User;


  ngOnInit(): void {
    this.User = (JSON.parse((localStorage.getItem('currentUser'))));

    this.registerForm = this.formBuilder.group({
      Codigo: ['', [Validators.required, Validators.minLength(8)]],
      id_alumno: [this.User[0].Id],
        }); 
  }

  get f() {return this.registerForm.controls; }

  logout() {
    this.ApiService.logout();
    this.router.navigate(['/login']);
  }

  MostrarForm(){
    if(this.displayForm){
    this.displayForm = false;
    }else {
    this.displayForm = true;
    }
  }

  VerRanking(info){
    this.ApiService.InfoRanking(info);
    this.router.navigate(['/fullranking']);
  }

  MostrarRanking(){
    if(this.displayTable){
      this.displayTable = false;
    }else {
      this.displayTable = true;
      this.ApiService.mostrar_rankings_alumno(this.User[0].Id).subscribe(
        datos => {
          if(datos['resultado'] == 'RANKINGOK'){
            console.log(datos);
             this.Ranking =  JSON.parse(datos['ranking']);
            //  return this.recojerranking();
          }
          console.log(datos);
        }
      )
    }
  }

  eliminarRanking(info){
    this.ApiService.elimnar_ranking_alumno(info).subscribe(
      datos => {
        console.log(datos);
      }
    );
  }

  entrarRanking(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.log(this.registerForm.value);

    this.ApiService.verificarRanking(this.registerForm.value).subscribe(
        datos => {
          if(datos['resultado'] == 'ALUMNOENRANKING'){
             this.id = datos['Id_ranking'];

             const ranking = {
                id_ranking: datos['Id_ranking'],
                id_user : this.User[0].Id
             }

                this.ApiService.añadirRanking(ranking).subscribe(
                      datos => {
                              console.log(datos);
                      });
          }
          if(datos['resultado'] == 'ALUMNOYAEXISTE'){
            console.log("Alumno ya existe en este Ranking")
          }
        });
  }
}
