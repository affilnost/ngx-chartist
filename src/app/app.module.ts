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
import { AdvancedSmilAnimationsComponent } from './examples/advanced-smil-animations/advanced-smil-animations.component';
import { SvgPathAnimationComponent } from './examples/svg-path-animation/svg-path-animation.component';
import { LineInterpolationComponent } from './examples/line-interpolation/line-interpolation.component';
import { SeriesOverridesComponent } from './examples/series-overrides/series-overrides.component';
import { TimeSeriesWithMomentjsComponent } from './examples/time-series-with-momentjs/time-series-with-momentjs.component';


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
    UsingEventsToReplaceGraphicsComponent,
    AdvancedSmilAnimationsComponent,
    SvgPathAnimationComponent,
    LineInterpolationComponent,
    SeriesOverridesComponent,
    TimeSeriesWithMomentjsComponent
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
