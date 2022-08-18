import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanPage } from './aduan.page';

const routes: Routes = [
  {
    path: '',
    component: AduanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanPageRoutingModule {}
