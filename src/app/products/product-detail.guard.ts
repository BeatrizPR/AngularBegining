import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {
    
  }
  canActivate(
    // info about current route
    next: ActivatedRouteSnapshot,
    //info about state of route
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id = +next.url[1].path;
      if(isNaN(id) || id <1){
        console.log('Invalid product Id');
        this.router.navigate(['/products']);
        return false;
      };
      return true;
  }
}
