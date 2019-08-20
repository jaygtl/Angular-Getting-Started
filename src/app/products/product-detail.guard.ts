import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
      const id = +next.url[1].path;
      if(isNaN(id) || id < 0)
      {
        alert('Invalid ID');
        this.router.navigate(['/products']);
        return false;
      }
      else 
      {
        return true;
      }
    }
}
