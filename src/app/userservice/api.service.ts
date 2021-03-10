import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) 
export class ApiService {

  url = 'http://localhost:5050/php/'; // disponer de el url de su servidor que tiene los archivos PHP

  constructor(private http: HttpClient) { }
  
  Login(login) {
    return this.http.post(`${this.url}Login.php`, JSON.stringify(login));
  }
  Register(register) {
    return this.http.post(`${this.url}register.php`, JSON.stringify(register));
  }
  Registerprof(register) {
    return this.http.post(`${this.url}registerprofesor.php`, JSON.stringify(register));
  }
}
