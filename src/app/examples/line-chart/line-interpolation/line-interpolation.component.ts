import { Component } from '@angular/core';
import {IChartistSettingsType} from '../../../../../projects/ngx-chartist/src/lib/ngx-chartist.component';

@Component({
  selector: 'app-line-interpolation',
  templateUrl: './line-interpolation.component.html'
})
export class LineInterpolationComponent {

  chartOpts: IChartistSettingsType;
  title = 'LINE INTERPOLATION / SMOOTHING';

  constructor() {
    this.chartOpts = {
      data: {
        labels: [1, 2, 3, 4, 5],
        series: [
          [1, 5, 10, 0, 1],
          [10, 15, 0, 1, 2]
        ]
      },
      options: {
        low: 0
      },
      lineSmooth: {
        interpolation: 'simple',
        data: {
          divisor: 2
        }
      }
    };
  }

}
