import {Component} from '@angular/core';
import {IChartistSettingsType} from '../../../chartist/chartist.component';

@Component({
  selector: 'app-bi-polar-line-chart',
  templateUrl: './bi-polar-line-chart.component.html'
})
export class BiPolarLineChartComponent {

  chartOpts: IChartistSettingsType;
  title = 'BI-POLAR LINE CHART WITH AREA ONLY';

  constructor() {
    this.chartOpts = {
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
          [1, 2, 3, 1, -2, 0, 1, 0],
          [-2, -1, -2, -1, -2.5, -1, -2, -1],
          [0, 0, 0, 1, 2, 2.5, 2, 1],
          [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ]
      },
      options: {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
          showLabel: false,
          showGrid: false
        }
      }
    };
  }

}
