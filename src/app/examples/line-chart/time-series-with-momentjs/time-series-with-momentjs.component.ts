import { Component } from '@angular/core';
import {NgxChartistService} from '../../../../../projects/ngx-chartist/src/lib/ngx-chartist.service';
import * as moment from 'moment';
import {IChartistSettingsType} from '../../../../../projects/ngx-chartist/src/lib/ngx-chartist.component';

@Component({
  selector: 'app-time-series-with-momentjs',
  templateUrl: './time-series-with-momentjs.component.html'
})
export class TimeSeriesWithMomentjsComponent {

  chartOpts: IChartistSettingsType;
  title = 'TIME SERIES WITH MOMENT.JS';

  constructor(chartistService: NgxChartistService) {
    this.chartOpts = {
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [
          {
            name: 'series-1',
            data: [
              {x: new Date(143134652600), y: 53},
              {x: new Date(143234652600), y: 40},
              {x: new Date(143340052600), y: 45},
              {x: new Date(143366652600), y: 40},
              {x: new Date(143410652600), y: 20},
              {x: new Date(143508652600), y: 32},
              {x: new Date(143569652600), y: 18},
              {x: new Date(143579652600), y: 11}
            ]
          },
          {
            name: 'series-2',
            data: [
              {x: new Date(143134652600), y: 53},
              {x: new Date(143234652600), y: 35},
              {x: new Date(143334652600), y: 30},
              {x: new Date(143384652600), y: 30},
              {x: new Date(143568652600), y: 10}
            ]
          }
        ]
      },
      options: {
        axisX: {
          type: chartistService.getFixedScaleAxis(),
          divisor: 5,
          labelInterpolationFnc: function(value) {
            return moment(value).format('MMM D');
          }
        }
      }
    };
  }

}
