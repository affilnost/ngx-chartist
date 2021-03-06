import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {MaterialModule} from './shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SimpleLineChartComponent } from './examples/line-chart/simple-line-chart/simple-line-chart.component';
import { HolesInDataComponent } from './examples/line-chart/holes-in-data/holes-in-data.component';
import { ExampleComponent } from './examples/example.component';
import { FilledHolesInDataComponent } from './examples/line-chart/filled-holes-in-data/filled-holes-in-data.component';
import { OnlyWholeNumbersComponent } from './examples/line-chart/only-whole-numbers/only-whole-numbers.component';
import { LineScatterDiagramComponent } from './examples/line-chart/line-scatter-diagram/line-scatter-diagram.component';
import { LineChartWithAreaComponent } from './examples/line-chart/line-chart-with-area/line-chart-with-area.component';
import { BiPolarLineChartComponent } from './examples/line-chart/bi-polar-line-chart/bi-polar-line-chart.component';
import { UsingEventsToReplaceGraphicsComponent } from './examples/line-chart/using-events-to-replace-graphics/using-events-to-replace-graphics.component';
import { AdvancedSmilAnimationsComponent } from './examples/line-chart/advanced-smil-animations/advanced-smil-animations.component';
import { SvgPathAnimationComponent } from './examples/line-chart/svg-path-animation/svg-path-animation.component';
import { LineInterpolationComponent } from './examples/line-chart/line-interpolation/line-interpolation.component';
import { SeriesOverridesComponent } from './examples/line-chart/series-overrides/series-overrides.component';
import { TimeSeriesWithMomentjsComponent } from './examples/line-chart/time-series-with-momentjs/time-series-with-momentjs.component';
import { BiPolarBarChartComponent } from './examples/bar-chart/bi-polar-bar-chart/bi-polar-bar-chart.component';
import { OverlappingBarsOnMobileComponent } from './examples/bar-chart/overlapping-bars-on-mobile/overlapping-bars-on-mobile.component';
import { AddPeakCirclesUsingDrawEventsComponent } from './examples/bar-chart/add-peak-circles-using-draw-events/add-peak-circles-using-draw-events.component';
import { MultiLineLabelsComponent } from './examples/bar-chart/multi-line-labels/multi-line-labels.component';
import { StackedBarChartComponent } from './examples/bar-chart/stacked-bar-chart/stacked-bar-chart.component';
import { HorizontalBarChartComponent } from './examples/bar-chart/horizontal-bar-chart/horizontal-bar-chart.component';
import { ExtremeResponsiveConfigurationComponent } from './examples/bar-chart/extreme-responsive-configuration/extreme-responsive-configuration.component';
import { DistributedSeriesComponent } from './examples/bar-chart/distributed-series/distributed-series.component';
import { LabelPlacementComponent } from './examples/bar-chart/label-placement/label-placement.component';
import { SimplePieChartComponent } from './examples/pie-chart/simple-pie-chart/simple-pie-chart.component';
import { PieChartWithCustomLabelsComponent } from './examples/pie-chart/pie-chart-with-custom-labels/pie-chart-with-custom-labels.component';
import { GaugeChartComponent } from './examples/pie-chart/gauge-chart/gauge-chart.component';
import { AnimatingADonutComponent } from './examples/pie-chart/animating-a-donut/animating-a-donut.component';
import { DonutChartUsingFillComponent } from './examples/pie-chart/donut-chart-using-fill/donut-chart-using-fill.component';
import { GaugeChartUsingFillComponent } from './examples/pie-chart/gauge-chart-using-fill/gauge-chart-using-fill.component';

// if you want to use the local version (instead of npm-loaded), please use "tsconfig-copy.json" (with paths defined)
import {NgxChartistModule} from 'ngx-chartist';


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
    TimeSeriesWithMomentjsComponent,
    BiPolarBarChartComponent,
    OverlappingBarsOnMobileComponent,
    AddPeakCirclesUsingDrawEventsComponent,
    MultiLineLabelsComponent,
    StackedBarChartComponent,
    HorizontalBarChartComponent,
    ExtremeResponsiveConfigurationComponent,
    DistributedSeriesComponent,
    LabelPlacementComponent,
    SimplePieChartComponent,
    PieChartWithCustomLabelsComponent,
    GaugeChartComponent,
    AnimatingADonutComponent,
    DonutChartUsingFillComponent,
    GaugeChartUsingFillComponent
  ],
  imports: [
    BrowserModule,
    NgxChartistModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
