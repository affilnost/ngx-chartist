import {Component} from '@angular/core';
import {IChartistSettingsType} from '../../../chartist/chartist.component';

@Component({
  selector: 'app-overlapping-bars-on-mobile',
  templateUrl: './overlapping-bars-on-mobile.component.html'
})
export class OverlappingBarsOnMobileComponent {

  chartOpts: IChartistSettingsType;
  title = 'OVERLAPPING BARS ON MOBILE';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
          [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
      },
      options: {
        seriesBarDistance: 10
      },
      responsiveOptions: [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ],
      type: 'Bar'
    };
  }

}
