import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../userservice/api.service";
import { LoginComponent } from '../login/login.component';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MustMatch } from "../MustMatch";
import { RegisterprofComponent } from '../registerprof/registerprof.component';

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
    if (this.registerForm.invalid) {
      return;
    }else{
      this.ApiService.Register(this.registerForm.value).subscribe (
        datos => {
            this.router.navigate(['/login']);
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


