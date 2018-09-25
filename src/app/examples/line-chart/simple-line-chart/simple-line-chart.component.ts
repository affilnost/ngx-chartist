import {Component} from '@angular/core';
import {IChartistSettingsType} from '../../../../../projects/ngx-chartist/src/lib/ngx-chartist.component';

@Component({
  selector: 'app-simple-line-chart',
  templateUrl: './simple-line-chart.component.html'
})
export class SimpleLineChartComponent {

  chartOpts: IChartistSettingsType;
  title = 'SIMPLE LINE CHART';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      },
      options: {
        chartPadding: {right: 40},
        fullWidth: true
      }
    };
  }
}
