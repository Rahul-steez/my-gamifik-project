  
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from "../../userservice/Service's/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ApiService: ApiService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.ApiService.currentUserValue;
    if (currentUser) {
      return true;
    }else{
      this.router.navigate(['/login']), { queryParams: { returnUrl: state.url } };
      return false;
    }
  }
}