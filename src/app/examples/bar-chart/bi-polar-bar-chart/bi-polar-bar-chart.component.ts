import { Component } from '@angular/core';
import {IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-bi-polar-bar-chart',
  templateUrl: './bi-polar-bar-chart.component.html'
})
export class BiPolarBarChartComponent {

  chartOpts: IChartistSettingsType;
  title = 'BI-POLAR BAR CHART';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
          [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
      },
      options: {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      },
      type: 'Bar'
    };
  }

}
