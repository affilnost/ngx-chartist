import { Component } from '@angular/core';
import {IChartistSettingsType} from '../../../../../projects/ngx-chartist/src/lib/ngx-chartist.component';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html'
})
export class HorizontalBarChartComponent {

  chartOpts: IChartistSettingsType;
  title = 'HORIZONTAL BAR CHART';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
          [5, 4, 3, 7, 5, 10, 3],
          [3, 2, 9, 5, 4, 6, 4]
        ]
      },
      options: {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
          offset: 70
        }
      },
      type: 'Bar'
    };
  }

}
