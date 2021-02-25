import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from "./userservice/api.service";
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
