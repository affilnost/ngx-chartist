import { Component } from '@angular/core';
import {IChartistSettingsType} from '../../../../../projects/ngx-chartist/src/lib/ngx-chartist.component';

@Component({
  selector: 'app-multi-line-labels',
  templateUrl: './multi-line-labels.component.html'
})
export class MultiLineLabelsComponent {

  chartOpts: IChartistSettingsType;
  title = 'MULTI-LINE LABELS';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['First quarter of the current year 2018', 'Second quarter of the current year 2018',
          'Third quarter of the current year 2018', 'Fourth quarter of the current year 2018'],
        series: [
          [60000, 40000, 80000, 70000],
          [40000, 30000, 70000, 65000],
          [8000, 3000, 10000, 6000]
        ]
      },
      options: {
        seriesBarDistance: 10,
        axisX: {
          offset: 60
        },
        axisY: {
          offset: 80,
          labelInterpolationFnc: function(value) {
            return value + ' CHF';
          },
          scaleMinSpace: 15
        }
      },
      type: 'Bar'
    };
  }

}
