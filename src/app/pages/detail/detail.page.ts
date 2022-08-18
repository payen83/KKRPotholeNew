import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AduanService } from 'src/app/shared/services/aduan/aduan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public item: any = null;
  constructor(
    private aduanService: AduanService, 
    private activatedRoute: ActivatedRoute) { 
    let aduan_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.item = this.aduanService.getAduanById(Number(aduan_id));
  }

  ngOnInit() {
  }

}
