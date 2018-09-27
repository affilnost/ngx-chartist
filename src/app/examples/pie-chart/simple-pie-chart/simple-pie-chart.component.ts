import {Component} from '@angular/core';
import {IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-simple-pie-chart',
  templateUrl: './simple-pie-chart.component.html'
})
export class SimplePieChartComponent {

  chartOpts: IChartistSettingsType;
  title = 'SIMPLE PIE CHART';

  constructor() {
    const data = {
      series: [5, 3, 4]
    };
    const sum = function(a, b) { return a + b; };
    this.chartOpts = {
      data: data,
      options: {
        labelInterpolationFnc: function(value) {
          return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
      },
      type: 'Pie'
    };
  }
}
