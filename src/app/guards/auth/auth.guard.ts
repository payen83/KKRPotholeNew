import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneralService } from 'src/app/shared/services/general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private generalService: GeneralService, 
    private router: Router){
  }

 canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //check if the user already logged in
    return this.isAuthenticated();
  }

  async isAuthenticated(){
    let user: any = await this.generalService.get('USER');
    console.log(user);
    if(user) {
      return true;
    } else {
      this.router.navigate(['/login_new'], { replaceUrl: true })
      return false;
    }
  }

}
