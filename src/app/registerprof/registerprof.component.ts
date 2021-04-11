import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MustMatch } from "../MustMatch";
import { LoginComponent } from '../login/login.component';
import { ApiService } from "../userservice/Service's/api.service";
import { Router } from "@angular/router";
import { RegisterComponent } from '../register/register.component';
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
  selector: 'app-registerprof',
  templateUrl: './registerprof.component.html',
  styleUrls: ['./registerprof.component.css']
})
export class RegisterprofComponent implements OnInit {
  registerForm: FormGroup;
  verpasswd: boolean = false;
  verpasswd1: boolean = false;
  submitted = false;

  constructor(private ApiService: ApiService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Nick: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Pass: ['', Validators.required],
      Passconf: ['', Validators.required],
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Centro: ['', Validators.required]
    } , {
      validator: MustMatch('Pass', 'Passconf')
    });
  }

  get f() {return this.registerForm.controls; }

  register() { 
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }else{
      this.ApiService.Registerprof(this.registerForm.value).subscribe (
        datos => { 
          if(datos['resultado'] == 'OKREG') {
            Toast.fire({
              icon: 'success',
              title: 'Register Profesor Existoso'
            })
            this.router.navigate(['/loginprof']);

            }if(datos['resultado'] == 'FAIL') {
              Toast.fire({
                icon: 'error',
                title: 'Register Profesor Error'
              })
            }if(datos['resultado'] == 'FAILNICK') {
              Toast.fire({
                icon: 'error',
                title: 'Nick ya existe'
              })
            }
        }
      );
    }
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
