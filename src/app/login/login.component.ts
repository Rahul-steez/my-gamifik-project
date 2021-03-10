import { Component, OnInit } from '@angular/core';
import { ApiService } from "../userservice/api.service";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from '../register/register.component';
import { Router } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { HomeprofComponent } from '../homeprof/homeprof.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'my-gamifik-project';
  login = {
    Nick: null,
    Pass: null
  }

  constructor(private ApiService: ApiService, private router: Router) { }

  loginUsuario() {
    this.ApiService.Login(this.login).subscribe (
      datos => {
        if(datos['resultado'] == 'OK') {
          console.log(datos);
          alert(datos['mensaje']);
          this.router.navigate(['/home']);

        }if(datos['resultado'] == 'OKEY') {
          console.log(datos);
          alert(datos['mensaje']);
          this.router.navigate(['/homeprof']);

        }else {
          alert(datos['mensaje']);
        }
      }
    );
  }
}
