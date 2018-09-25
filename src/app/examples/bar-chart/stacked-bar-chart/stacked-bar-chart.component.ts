import {Component} from '@angular/core';
import {IChartistSettingsType} from '../../../../../projects/ngx-chartist/src/lib/ngx-chartist.component';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html'
})
export class StackedBarChartComponent {

  chartOpts: IChartistSettingsType;
  title = 'STACKED BAR CHART';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
          [800000, 1200000, 1400000, 1300000],
          [200000, 400000, 500000, 300000],
          [100000, 200000, 400000, 600000]
        ]
      },
      options: {
        stackBars: true,
        axisY: {
          labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
          }
        }
      },
      events: {
        draw: function (data) {
          if (data.type === 'bar') {
            data.element.attr({
              style: 'stroke-width: 30px'
            });
          }
        }
      },
      type: 'Bar'
    };
  }

}
