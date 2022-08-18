import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanPageRoutingModule } from './aduan-routing.module';

import { AduanPage } from './aduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanPageRoutingModule
  ],
  declarations: [AduanPage]
})
export class AduanPageModule {}
