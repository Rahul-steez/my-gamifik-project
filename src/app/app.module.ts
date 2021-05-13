import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from "./userservice/Service's/api.service";
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterprofComponent } from './registerprof/registerprof.component';
import { HomeprofComponent } from './homeprof/homeprof.component';
import { User } from './userservice/Models/alumnos';
import { Ranking } from './userservice/Models/lista';
import { ModificarinfoComponent } from './modificarinfo/modificarinfo.component';
import { ModificarinfoprofeComponent } from './modificarinfoprofe/modificarinfoprofe.component';
import { LoginprofComponent } from './loginprof/loginprof.component';
import { CookieService } from 'ngx-cookie-service';
import { RankingComponent } from './ranking-profe/ranking.component';
import { EditarRankingComponent } from './editar-ranking/editar-ranking.component';
import { RankingAlumnoComponent } from './ranking-alumno/ranking-alumno.component';
import { FullRankingComponent } from './full-ranking/full-ranking.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterprofComponent,
    HomeComponent,
    HomeprofComponent,
    ModificarinfoComponent,
    ModificarinfoprofeComponent,
    LoginprofComponent,
    RankingComponent,
    EditarRankingComponent,
    RankingAlumnoComponent,
    FullRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
