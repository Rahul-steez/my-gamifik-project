  
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from "../../userservice/Service's/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: ApiService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/secret-random-number']);
    }
    return !this.authService.isLoggedIn();
  }
}