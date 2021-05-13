import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RegisterprofComponent } from './registerprof/registerprof.component';
import { HomeComponent } from './home/home.component';
import { HomeprofComponent } from './homeprof/homeprof.component';
import { ModificarinfoComponent } from './modificarinfo/modificarinfo.component';
import { ModificarinfoprofeComponent } from './modificarinfoprofe/modificarinfoprofe.component';
import { LoginprofComponent } from './loginprof/loginprof.component';
import { AuthGuard } from './userservice/Guards/auth.guards';
import { RankingComponent } from './ranking-profe/ranking.component';
import { EditarRankingComponent } from './editar-ranking/editar-ranking.component';
import { RankingAlumnoComponent } from './ranking-alumno/ranking-alumno.component';
import { FullRankingComponent } from './full-ranking/full-ranking.component';

const routes: Routes = [
    { path:"", pathMatch: "full", redirectTo: 'login'},
    { path: "login", component: LoginComponent},
    { path: "loginprof", component: LoginprofComponent},
    { path: "register", component: RegisterComponent},
    { path: "registerprof", component: RegisterprofComponent},
    { path: "home", component: HomeComponent ,  canActivate: [AuthGuard]},
    { path: "homeprof", component: HomeprofComponent,  canActivate: [AuthGuard] },
    { path: "ranking", component: RankingComponent,  canActivate: [AuthGuard]},
    { path: "modificar", component: ModificarinfoComponent ,  canActivate: [AuthGuard]},
    { path: "modificarprofe", component: ModificarinfoprofeComponent, canActivate: [AuthGuard]},
    { path: "editarranking", component: EditarRankingComponent, canActivate: [AuthGuard]},
    { path: "rankingalumno", component: RankingAlumnoComponent, canActivate: [AuthGuard]},
    { path: "fullranking", component: FullRankingComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }