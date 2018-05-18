import { Component } from '@angular/core';
import {ChartSettingsType} from '../../chartist/chartist.component';
import {ChartistService} from '../../chartist/chartist.service';

@Component({
  selector: 'app-time-series-with-momentjs',
  templateUrl: './time-series-with-momentjs.component.html'
})
export class TimeSeriesWithMomentjsComponent {

  chartOpts: ChartSettingsType;
  title = 'TIME SERIES WITH MOMENT.JS';

  constructor(chartistService: ChartistService) {
    this.chartOpts = {
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [
          [1, 5, 2, 5, 4, 3],
          [2, 3, 4, 8, 1, 2],
          [5, 4, 3, 2, 1, 0.5]
        ]
      },
      options: {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true
      },
      events: {
        draw: function (data) {
          if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 2000 * data.index,
                dur: 2000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: chartistService.getSvg().Easing['easeOutQuint']
              }
            });
          }
        }
      }
    };
  }

}
