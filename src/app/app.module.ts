import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< Updated upstream
import { ApiService } from "./userservice/api.service";
=======
import { ApiService } from "./userservice/Service's/api.service";
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterprofComponent } from './registerprof/registerprof.component';
import { HomeprofComponent } from './homeprof/homeprof.component';
import { User } from './alumnos';
import { ModificarinfoComponent } from './modificarinfo/modificarinfo.component';
import { ModificarinfoprofeComponent } from './modificarinfoprofe/modificarinfoprofe.component';
import { LoginprofComponent } from './loginprof/loginprof.component';
import { CookieService } from 'ngx-cookie-service';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    LoginComponent
=======
    LoginComponent,
    RegisterComponent,
    RegisterprofComponent,
    HomeComponent,
    HomeprofComponent,
    ModificarinfoComponent,
    ModificarinfoprofeComponent,
    LoginprofComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
