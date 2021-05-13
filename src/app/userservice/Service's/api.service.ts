import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/alumnos';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { Profesor } from '../Models/profesor';
import { Ranking } from '../Models/lista';
import { Rank } from '../Models/ranking';
import { CookieService } from "ngx-cookie-service";
import { Tokens } from '../Models/tokens';

@Injectable({
  providedIn: 'root'
}) 
export class ApiService {
  recojerInfoRanking(): Rank {
    throw new Error('Method not implemented.');
  }
  recojeruptdaterank(): Rank {
    throw new Error('Method not implemented.');
  }

  
  url = 'http://localhost:5050/php/'; // disponer de el url de su servidor que tiene los archivos PHP
  User : User;
  Rank : Rank;
  Ranking : Ranking;
  Profesor : Profesor;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  /////////////////////////////////////////////////////

  private currentRankingSubject: BehaviorSubject<User>;
  public currentRanking: Observable<User>;



  constructor(private http: HttpClient, private cookies: CookieService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
 //////////////////////////
    this.currentRankingSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentRanking')));
    this.currentRanking = this.currentRankingSubject.asObservable();  
   }
  
  Login(login){
    return this.http.post(`${this.url}login_alumno.php`, JSON.stringify(login)).
    pipe(map((user: any) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log(user);

      if(user['resultado'] == 'OKALUMNO'){
        localStorage.setItem('currentUser', JSON.stringify(((JSON.parse(user.alumno)))));
        console.log(localStorage.getItem('currentUser'));
        console.log(user.alumno);
        this.currentUserSubject.next(user);
      } 
      return user;
  }));
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  Loginprof(login) {
    return this.http.post(`${this.url}login_profesor.php`, JSON.stringify(login)).
    pipe(map((user: any) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log(user);

      if(user['resultado'] == 'OKPROFESOR'){
      localStorage.setItem('currentUser', JSON.stringify(JSON.parse(user.profe)));
      this.currentUserSubject.next(user);
      }

      return user;
  }));;
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
  recojer(): any {
    return this.User;
  }
  recojerprofe(){
    return this.Profesor;
  }

  Modificar(login) {
    return this.http.post(`${this.url}modificarinfo_alumnos.php`, JSON.stringify(login)).
    pipe(map((user: any) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log(user);

      if(user['resultado'] == 'OKMODIALUMNO'){
        localStorage.setItem('currentUser', JSON.stringify(((JSON.parse(user.alumno)))));
        console.log(localStorage.getItem('currentUser'));
        console.log(user.alumno);
        this.currentUserSubject.next(user);
      }
      return user;
  }));;
  }

  Modificarprof(login) {
    return this.http.post(`${this.url}modificarinfo_profesor.php`, JSON.stringify(login)).
    pipe(map((user: any) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log(user);

      if(user['resultado'] == 'OKMODIPROFESOR'){
        localStorage.setItem('currentUser', JSON.stringify(((JSON.parse(user.profe)))));
        console.log(localStorage.getItem('currentUser'));
        console.log(user.alumno);
        this.currentUserSubject.next(user);
      }
      
      return user;
  }));
  }

  logout() {  
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  crear_codigo(){
    return this.http.get(`${this.url}crear_codigo.php`);
  }
  crear_ranking(info){
    return this.http.post(`${this.url}crear_ranking.php`, JSON.stringify(info));
  }
  mostrar_rankings(info){
    return this.http.post(`${this.url}mostrar_rankings.php`, JSON.stringify(info));
  }
  recojerranking(){
    return this.Ranking;
  }
  eliminarRanking(info){
    return this.http.post(`${this.url}eliminar_ranking.php`, JSON.stringify(info));
  }
  editarRanking(info){
    return this.http.post(`${this.url}editar_ranking.php`, JSON.stringify(info));
  }
  InfoRanking(info){
      console.log(info);
      localStorage.setItem('currentRanking', info);
  }
  verificarRanking(info){
    return this.http.post(`${this.url}comprobar_ranking.php`, JSON.stringify(info));
  }
  añadirRanking(info){
    console.log(info)
    return this.http.post(`${this.url}intro_alumno_ranking.php`, JSON.stringify(info));
  }
  mostrar_rankings_alumno(info){
    return this.http.post(`${this.url}mostrar_rankings_alumno.php`, JSON.stringify(info));
  }
  elimnar_ranking_alumno(info){
    return this.http.post(`${this.url}mostrar_rankings_alumno.php`, JSON.stringify(info));
  }
}
