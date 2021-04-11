import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../alumnos';
import { Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Profesor } from '../../profesor';
import { CookieService } from "ngx-cookie-service";
import { Tokens } from '../Models/tokens';

@Injectable({
  providedIn: 'root'
}) 
export class ApiService {

  url = 'http://localhost:5050/php/'; // disponer de el url de su servidor que tiene los archivos PHP
  User : User;
  Profesor : Profesor;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;



  constructor(private http: HttpClient, private cookies: CookieService) { }
  
  Login(login){
    return this.http.post(`${this.url}login_alumno.php`, JSON.stringify(login));
  }
  Loginprof(login) {
    return this.http.post(`${this.url}login_profesor.php`, JSON.stringify(login));
  }
  InfoAlumno(alumno) {
    this.User = alumno;
  }
  InfoProfe(profe) {
    this.Profesor = profe;
  }
  Register(register) {
    return this.http.post(`${this.url}register_alumno.php`, JSON.stringify(register));
  }
  Registerprof(register) {
    return this.http.post(`${this.url}register_profesor.php`, JSON.stringify(register));
  }
  recojer(){
    return this.User;
  }
  recojerprofe(){
    return this.Profesor;
  }
  Modificar(login) {
    return this.http.post(`${this.url}modificarinfo_alumnos.php`, JSON.stringify(login));
  }
  Modificarprof(login) {
    return this.http.post(`${this.url}modificarinfo_profesor.php`, JSON.stringify(login));
  }
}
