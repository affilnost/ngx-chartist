import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChartistModule} from './chartist/chartist.module';

import {MaterialModule} from './shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SimpleLineChartComponent } from './examples/simple-line-chart/simple-line-chart.component';
import { HolesInDataComponent } from './examples/holes-in-data/holes-in-data.component';
import { ExampleComponent } from './examples/example.component';
import { FilledHolesInDataComponent } from './examples/filled-holes-in-data/filled-holes-in-data.component';
import { OnlyWholeNumbersComponent } from './examples/only-whole-numbers/only-whole-numbers.component';
import { LineScatterDiagramComponent } from './examples/line-scatter-diagram/line-scatter-diagram.component';
import { LineChartWithAreaComponent } from './examples/line-chart-with-area/line-chart-with-area.component';
import { BiPolarLineChartComponent } from './examples/bi-polar-line-chart/bi-polar-line-chart.component';
import { UsingEventsToReplaceGraphicsComponent } from './examples/using-events-to-replace-graphics/using-events-to-replace-graphics.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleLineChartComponent,
    HolesInDataComponent,
    ExampleComponent,
    FilledHolesInDataComponent,
    OnlyWholeNumbersComponent,
    LineScatterDiagramComponent,
    LineChartWithAreaComponent,
    BiPolarLineChartComponent,
    UsingEventsToReplaceGraphicsComponent
  ],
  imports: [
    BrowserModule,
    ChartistModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
