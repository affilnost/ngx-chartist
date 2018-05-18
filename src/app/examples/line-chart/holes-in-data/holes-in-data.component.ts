import {Component} from '@angular/core';
import {ChartSettingsType} from '../../../chartist/chartist.component';

@Component({
  selector: 'app-holes-in-data',
  templateUrl: './holes-in-data.component.html'
})
export class HolesInDataComponent {

  chartOpts: ChartSettingsType;
  title = 'HOLES IN DATA';

  constructor() {
    this.chartOpts = {
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        series: [
          [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
          [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
          [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null],
          // this data format is not correctly rendered (not how it's supposed to be rendered),
          // TODO: Report a bug in Chartist.JS
          [{x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]
        ]
      },
      options: {
        fullWidth: true,
        chartPadding: {
          right: 15
        },
        low: 0
      }
    };
  }

}
