import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneralService } from 'src/app/shared/services/general.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  constructor(
    private generalService: GeneralService,
    private router: Router
    ){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin();
  }

  async navigateToAduan(){
    await this.router.navigate(['/aduan'], {replaceUrl: true});
    return false;
  }

  async isAdmin(){
    // let role = await this.generalService.get('ROLE');
    let user = await this.generalService.getUserData();
    console.log('user ==> ', user);
    if(user){
      if(user.data.role == 'admin') {
        return true;
      } else {
        this.navigateToAduan();
      }
    } 
    this.navigateToAduan();
  }


}
