import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class AduanService {
  private url: string;
  private aduan: Array<any>;
  constructor(private http: HttpClient, private generalService: GeneralService) { 
    this.aduan = [];
    this.url = this.generalService.getBaseUrl();
  }

  getAduanById(id: number) {
   return this.aduan.find((aduan_: any) => aduan_.id === id);
  }

  getAduan(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/aduan')
      .subscribe((res: any) => {
        this.aduan = res;
        resolve(res);
      }, (error: any) => { reject(error) })
    });
  }

}
