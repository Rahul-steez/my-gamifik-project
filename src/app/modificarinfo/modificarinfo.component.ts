import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MustMatch } from "../MustMatch";
import { ApiService } from "../userservice/Service's/api.service";
import { Router } from "@angular/router";
import { User } from '../userservice/Models/alumnos';
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
  selector: 'app-modificarinfo',
  templateUrl: './modificarinfo.component.html',
  styleUrls: ['./modificarinfo.component.css']
})
export class ModificarinfoComponent implements OnInit {

  User: User;
  registerForm: FormGroup;
  submitted = false;

  constructor(private ApiService: ApiService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.User = (JSON.parse((localStorage.getItem('currentUser'))));
    console.log(this.User);

    console.log(this.User);
    this.registerForm = this.formBuilder.group({
      Id: [this.User[0].Id, Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PassAnt: ['', Validators.required],
      Pass: ['', Validators.required],
      Passconf: ['', Validators.required],
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required]
    } , {
      validator: MustMatch('Pass', 'Passconf')
    });
    console.log(this.registerForm.value.Id);
    this.User = (JSON.parse((localStorage.getItem('currentUser'))));
    console.log(this.User);
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
      this.ApiService.Modificar(this.registerForm.value).subscribe (
        datos => {
          if(datos['resultado'] == 'OKMODIALUMNO') {
            Toast.fire({
              icon: 'success',
              title: 'Datos Alumno Modificado'
            })
            this.router.navigate(['/home']);

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
