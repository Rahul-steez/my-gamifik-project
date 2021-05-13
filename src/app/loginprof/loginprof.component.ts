import { Component, OnInit } from '@angular/core';
import { ApiService } from "../userservice/Service's/api.service";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { HomeprofComponent } from '../homeprof/homeprof.component';
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
  selector: 'app-loginprof',
  templateUrl: './loginprof.component.html',
  styleUrls: ['./loginprof.component.css']
})



export class LoginprofComponent implements OnInit {
  login = {
    Nick: null,
    Pass: null
  }

  constructor(private ApiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

    loginUsuario() {
      this.ApiService.Loginprof(this.login).subscribe(
        datos => {
          if(datos['resultado'] == 'OKPROFESOR') {
            console.log(datos);
            Toast.fire({
              icon: 'success',
              title: 'Login Profesor Existoso'
            })
            this.ApiService.InfoProfe(JSON.parse(datos['profe']));
            this.router.navigate(['/homeprof']);
  
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
