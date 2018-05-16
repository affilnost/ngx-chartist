import {Component} from '@angular/core';
import {ChartSettingsType} from '../../chartist/chartist.component';

@Component({
  selector: 'app-filled-holes-in-data',
  templateUrl: './filled-holes-in-data.component.html'
})
export class FilledHolesInDataComponent {

  chartOpts: ChartSettingsType;
  title = 'FILLED HOLES IN DATA';

  constructor() {
    this.chartOpts = {
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        series: [
          [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
          [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
          [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null],
          [3, 3, undefined, 4, null, 4, 4]
        ]
      },
      options: {
        low: 0,
        chartPadding: {
          right: 15
        },
        fullWidth: true
      },
      lineSmooth: {
        interpolation: 'cardinal',
        data: {
          fillHoles: true
        }
      },
    };
  }

}