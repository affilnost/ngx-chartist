import { Component } from '@angular/core';
import {IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html'
})
export class GaugeChartComponent {

  chartOpts: IChartistSettingsType;
  title = 'GAUGE CHART';

  constructor() {
    this.chartOpts = {
      data: {
        series: [20, 10, 30, 40]
      },
      options: {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: false
      },
      type: 'Pie'
    };
  }

}
