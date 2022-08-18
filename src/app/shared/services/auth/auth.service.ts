import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;
  constructor(
    private generalService: GeneralService, 
    private http: HttpClient) { 
    this.url = this.generalService.getBaseUrl();
  }

  login(user: any){
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/login?email=${user.email}&password=${user.password}`, user)
      .subscribe((res: any) => {
        resolve(res);
      }, err => {reject(err);})
    })
  }

}
