import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../userservice/Service's/api.service";
import { LoginComponent } from '../login/login.component';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MustMatch } from "../MustMatch";

import { RegisterprofComponent } from '../registerprof/registerprof.component';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'my-gamifik-project';
  registerForm: FormGroup;
  verpasswd: boolean = false;
  verpasswd1: boolean = false;
  submitted = false;
  token;

  login = {
    Nick: null,
    Pass: null
  }

  
  constructor(private ApiService: ApiService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Nick: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Pass: ['', Validators.required],
      Passconf: ['', Validators.required],
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required]
    } , {
      validator: MustMatch('Pass', 'Passconf')
    });
  }

  get f() {return this.registerForm.controls; }

  register() { 
    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }else{
      this.ApiService.Register(this.registerForm.value).subscribe (
        datos => { 
          
          if(datos['resultado'] == 'OKREG') {
          Toast.fire({
            icon: 'success',
            title: 'Register Alumno Existoso'
          })
          this.router.navigate(['/login']);

        }if(datos['resultado'] == 'RANKINGERRL') {
          Toast.fire({
            icon: 'error',
            title: 'Register Alumno Error'
          })
        }if(datos['resultado'] == 'FAILRANKING') {
          Toast.fire({
            icon: 'error',
            title: 'Nick ya existe'
          })
        }
        }
      );
    }
}

  tryregister() {
    console.log(this.registerForm.value);
  }

  habilitarpasswd(): void {
    let campo:any = document.getElementById('passwd');
    if (this.verpasswd) {
      this.verpasswd = false;
      campo.type = "password";
    } else {
      this.verpasswd = true;
      campo.type = "text";
    }
  }
  habilitarpasswd1(): void {
    let campo:any = document.getElementById('passwdconf');
    if (this.verpasswd1) {
      this.verpasswd1 = false;
      campo.type = "password";
    } else {
      this.verpasswd1 = true;
      campo.type = "text";
    }
  }
}


