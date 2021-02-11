import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static Register() {
    throw new Error('Method not implemented.');
  }

  url = 'http://http://localhost:5050/php/'; // disponer de el url de su servidor que tiene los archivos PHP

  constructor(private http: HttpClient) { }
  
  ComprobarUsuarioService(user: any): Observable<any> {
    return this.http.get(`${this.url}comprobarusuario.php?user=${user}`);
  }
  Register(user: any): Observable<any> {
    return this.http.get(`${this.url}register.php?user=${user}`);
  }
  Login(user: any): Observable<any> {
    return this.http.get(`${this.url}login.php?user=${user}`);
  }
}
