import { Component, OnInit, Injectable  } from '@angular/core';
import { ApiService } from "../userservice/Service's/api.service";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from '../register/register.component';
import { Router } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { HomeprofComponent } from '../homeprof/homeprof.component';
import { ModificarinfoComponent } from '../modificarinfo/modificarinfo.component';
import { ModificarinfoprofeComponent } from '../modificarinfoprofe/modificarinfoprofe.component';
import { LoginprofComponent } from '../loginprof/loginprof.component';
import Swal from 'sweetalert2';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'my-gamifik-project';
  token;
  login = {
    Nick: null,
    Pass: null
  }

  constructor(private ApiService: ApiService, private router: Router) { }

  loginUsuario() {
    this.ApiService.Login(this.login).subscribe(
      datos => {
        if(datos['resultado'] == 'OKALUMNO') {
          console.log(datos['alumno']);
          Toast.fire({
            icon: 'success',
            title: 'Login Alumno Existoso'
          })
          this.ApiService.InfoAlumno(JSON.parse(datos['alumno']));
          this.router.navigate(['/home']);
          
        }if(datos['resultado'] == 'FAILCONTRASEÑA'){
          console.log(datos);
          Toast.fire({
            icon: 'warning',
            title: 'Contraseña Incorrecta'
          })
          
        }if(datos['resultado'] == 'NOUSUARIO'){
          Toast.fire({
            icon: 'error',
            title: 'Usuario Inexistente'
          })
        }
      }
    );
  }
}
