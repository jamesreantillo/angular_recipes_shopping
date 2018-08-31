import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    return this.authService.isAuthenticated();
  }
  constructor( private authService: AuthService) { }
}
