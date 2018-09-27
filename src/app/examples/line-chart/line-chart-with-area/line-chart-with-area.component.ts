import {Component} from '@angular/core';
import {IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-line-chart-with-area',
  templateUrl: './line-chart-with-area.component.html'
})
export class LineChartWithAreaComponent {

  chartOpts: IChartistSettingsType;
  title = 'LINE CHART WITH AREA';

  constructor() {
    this.chartOpts = {
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
          [5, 9, 7, 8, 5, 3, 5, 4]
        ]
      },
      options: {
        low: 0,
        showArea: true
      }
    };
  }

}
