import { Component, OnInit } from '@angular/core';
import { ApiService } from "../userservice/api.service";
import { LoginComponent } from '../login/login.component';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'my-gamifik-project';
  register = {
    Nick: null,
    Pass: null,
    Nombre: null,
    Apellido: null,
    Centro: null
  }
  
  constructor(private ApiService: ApiService) { }

  Register() {
    this.ApiService.Register(this.register).subscribe (
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