import { Component, OnInit } from '@angular/core';
import { ApiService } from "../userservice/api.service";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from '../register/register.component';

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

  constructor(private ApiService: ApiService) { }

  loginUsuario() {
    this.ApiService.Login(this.login).subscribe (
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
        } else {
          alert(datos['mensaje']);
        }
      }
    );
  }
}
