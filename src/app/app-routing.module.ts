import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
<<<<<<< Updated upstream
=======
import { RegisterprofComponent } from './registerprof/registerprof.component';
import { HomeComponent } from './home/home.component';
import { HomeprofComponent } from './homeprof/homeprof.component';
import { ModificarinfoComponent } from './modificarinfo/modificarinfo.component';
import { ModificarinfoprofeComponent } from './modificarinfoprofe/modificarinfoprofe.component';
import { LoginprofComponent } from './loginprof/loginprof.component';
>>>>>>> Stashed changes

const routes: Routes = [
    { path:"", pathMatch: "full", redirectTo: 'login'},
    { path: "login", component: LoginComponent},
<<<<<<< Updated upstream
    { path: "register", component: RegisterComponent}
=======
    { path: "loginprof", component: LoginprofComponent},
    { path: "register", component: RegisterComponent},
    { path: "registerprof", component: RegisterprofComponent},
    { path: "home", component: HomeComponent},
    { path: "homeprof", component: HomeprofComponent},
    { path: "modificar", component: ModificarinfoComponent},
    { path: "modificarprofe", component: ModificarinfoprofeComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }