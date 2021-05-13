import { Component, OnInit } from '@angular/core';
import { HomeprofComponent } from '../homeprof/homeprof.component';
import { ApiService } from "../userservice/Service's/api.service";
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from '../userservice/Models/alumnos';
import { MustMatch } from "../MustMatch";
import { Profesor } from '../userservice/Models/profesor';
import { LoginComponent } from '../login/login.component';
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
  selector: 'app-modificarinfoprofe',
  templateUrl: './modificarinfoprofe.component.html',
  styleUrls: ['./modificarinfoprofe.component.css']
})
export class ModificarinfoprofeComponent implements OnInit {
  Profesor: Profesor;
  registerForm: FormGroup;
  submitted = false;

  constructor(private ApiService: ApiService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    console.log(this.Profesor);

    this.Profesor = (JSON.parse((localStorage.getItem('currentUser'))));
    console.log(this.Profesor);

    this.registerForm = this.formBuilder.group({
      Id: [this.Profesor[0].Id, Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Pass: ['', Validators.required],
      PassAnt: ['', Validators.required],
      Passconf: ['', Validators.required],
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Centro: ['', Validators.required]
    } , {
      validator: MustMatch('Pass', 'Passconf')
    });
    this.Profesor = (JSON.parse((localStorage.getItem('currentUser'))));
    console.log(this.Profesor);
  }

  get f() {return this.registerForm.controls; }

  logout() {
    this.ApiService.logout();
    this.router.navigate(['/login']);
  }

  modificar() { 
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }else{
      this.ApiService.Modificarprof(this.registerForm.value).subscribe (
        datos => {
          if(datos['resultado'] == 'OKMODIPROFESOR') {
            Toast.fire({
              icon: 'success',
              title: 'Datos Profesor Modificado'
            })
            this.router.navigate(['/homeprof']);

          }if(datos['resultado'] == 'FAIL') {
            Toast.fire({
              icon: 'warning',
              title: 'Datos No Modificados'
            })
          }if(datos['resultado'] == 'FAKEPSW'){
            Toast.fire({
              icon: 'error',
              title: 'Error de Contraseña Anterior'
            })
          }
        }
      );
    }
  }
}
