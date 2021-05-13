import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../userservice/Service's/api.service";
import { Profesor } from '../userservice/Models/profesor';
import { Ranking } from '../userservice/Models/lista';
import { Rank } from '../userservice/Models/ranking';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  codigo: Object;

  constructor(private ApiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  displayForm = false;
  displayTable = false;
  submitted = false;
  registerForm: FormGroup;
  Profesor: Profesor;
  Ranking: Ranking;
  Rank: Rank;


  ngOnInit(): void {
  this.Profesor = (JSON.parse((localStorage.getItem('currentUser'))));
  console.log(this.Profesor[0].Id); 

  this.ApiService.crear_codigo().subscribe(
    datos =>{
       this.codigo = datos;
      });

  this.registerForm = this.formBuilder.group({
    Codigo: ['', [Validators.required,Validators.minLength(8)]],
    Nombre: ['', Validators.required],
    id_profesor: [this.Profesor[0].Id]
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
    this.ApiService.crear_codigo().subscribe(
      datos =>{
         this.codigo = datos;
        });
    }
  }

  MostrarRanking(){
    if(this.displayTable){
      this.displayTable = false;
    }else {
      this.displayTable = true;
      console.log(this.Profesor[0].Id);
      this.ApiService.mostrar_rankings(this.Profesor[0].Id).subscribe(
        datos => {
            if(datos['resultado'] == 'RANKINGOK'){
              console.log(datos);
               this.Ranking =  JSON.parse(datos['ranking']);
              //  return this.recojerranking();
            }
            console.log(datos);
        }
      );
      // this.Ranking = this.ApiService.recojerranking();
      // console.log(this.Ranking) ;
    }
  }

  editarRanking(info){
    this.ApiService.InfoRanking(info);
    this.router.navigate(['/editarranking']);
  }

  elminarRanking(info){
    this.ApiService.eliminarRanking(info).subscribe(
      datos => {
          if(datos['resultado'] == 'RANKINGDEL'){
            Toast.fire({
              icon: 'success',
              title: 'Ranking Eliminado'
            })
          }
          if(datos['resultado'] == 'RANKINGERRR'){
            Toast.fire({
              icon: 'warning',
              title: 'Ranking No Eliminado'
            })
          }
          if(datos['resultado'] == 'FAILRANKING'){
            Toast.fire({
              icon: 'warning',
              title: 'Ranking No Eliminado'
            })
          }
      }
    );
  }
  crearRanking(){
    this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }

      this.ApiService.crear_ranking(this.registerForm.value).subscribe(
        datos => {
          if(datos['resultado'] == 'RANKINGOK'){
            Toast.fire({
              icon: 'success',
              title: 'Ranking Creado'
            })
          }
          if(datos['resultado'] == 'RANKINGERR'){
            Toast.fire({
              icon: 'warning',
              title: 'Ranking No Eliminado'
            })
          }
          if(datos['resultado'] == 'FAILRANKING'){
            Toast.fire({
              icon: 'warning',
              title: 'Ranking No Eliminado'
            })
          }
      })
  }
}

