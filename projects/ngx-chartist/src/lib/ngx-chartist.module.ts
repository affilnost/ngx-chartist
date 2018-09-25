import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartistComponent } from './ngx-chartist.component';
import {NgxChartistService} from './ngx-chartist.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxChartistComponent],
  exports: [NgxChartistComponent],
  providers: [
    NgxChartistService
  ]
})
export class NgxChartistModule { }
