import { Component } from '@angular/core';
import {IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-gauge-chart-using-fill',
  templateUrl: './gauge-chart-using-fill.component.html'
})
export class GaugeChartUsingFillComponent {

  chartOpts: IChartistSettingsType;
  title = 'GAUGE CHART USING FILL RATHER THAN STROKE';

  constructor() {
    this.chartOpts = {
      data: {
        series: [20, 10, 30, 40]
      },
      options: {
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 270,
        total: 200,
        showLabel: true
      },
      type: 'Pie'
    };
  }

}
