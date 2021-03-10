import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RegisterprofComponent } from './registerprof/registerprof.component';
import { HomeComponent } from './home/home.component';
import { HomeprofComponent } from './homeprof/homeprof.component';

const routes: Routes = [
    { path:"", pathMatch: "full", redirectTo: 'login'},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent},
    { path: "registerprof", component: RegisterprofComponent},
    { path: "home", component: HomeComponent},
    { path: "homeprof", component: HomeprofComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }