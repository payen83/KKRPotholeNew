import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AduanService } from 'src/app/shared/services/aduan/aduan.service';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-aduan',
  templateUrl: './aduan.page.html',
  styleUrls: ['./aduan.page.scss'],
})
export class AduanPage implements OnInit {
  public aduanList: Array<any>;
  constructor(
    private aduanService: AduanService,
    private generalService: GeneralService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getAduan_();
  }

  async logout(){
    await this.generalService.clear();
    this.router.navigate(['/login_new'], { replaceUrl: true } );
  }
  
  async getAduan_(){
    try {
      let response: any = await this.aduanService.getAduan();
      console.log(response);
      this.aduanList = response;
    } catch(error) {
      console.log('Error ==> ', error)
    }
  }

  convertDate(dateTime: any) {
    let date = new Date(dateTime);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let time = String(dateTime).split('T')[1].split('.')[0];
    let monthList = ["01", "02", "03", "04", "05", "06", 
    "07", "08", "09", "10", "11", "12"];
    return day + '/' + monthList[month] + '/' + year + ', ' + time;
  }

}
