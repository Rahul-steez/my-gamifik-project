import { Component, OnInit } from '@angular/core';
import { ApiService } from "../userservice/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nick: string;
  email: string;
  password: string;
  confirmPassword: string;
  nombre: string;
  apellido: string;
  centro: string;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
  }
  ComprobarUsuario(nick){
      this.ApiService.ComprobarUsuarioService(nick).subscribe (
      data => {
          this.nick = data[0];
        if(data['resultado'] == 'OK'){
          alert(data['mensaje']);
          ApiService.Register();
        }else{
          alert(data['mensaje']); 
        }
      });



  }
}
