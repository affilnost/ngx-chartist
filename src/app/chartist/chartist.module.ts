import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartistComponent} from './chartist.component';
import {ChartistService} from './chartist.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ChartistComponent
  ],
  declarations: [
    ChartistComponent
  ],
  providers: [
    ChartistService
  ]
})
export class ChartistModule { }
