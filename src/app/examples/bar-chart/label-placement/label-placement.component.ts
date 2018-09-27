import { Component } from '@angular/core';
import {IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-label-placement',
  templateUrl: './label-placement.component.html'
})
export class LabelPlacementComponent {

  chartOpts: IChartistSettingsType;
  title = 'LABEL PLACEMENT';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
          [5, 4, 3, 7, 5, 10, 3],
          [3, 2, 9, 5, 4, 6, 4]
        ]
      },
      options: {
        axisX: {
          // On the x-axis start means top and end means bottom
          position: 'start'
        },
        axisY: {
          // On the y-axis start means left and end means right
          position: 'end'
        }
      },
      type: 'Bar'
    };
  }

}
