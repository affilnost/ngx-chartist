import {Component} from '@angular/core';
import {IChartistSettingsType} from '../../../chartist/chartist.component';

@Component({
  selector: 'app-pie-chart-with-custom-labels',
  templateUrl: './pie-chart-with-custom-labels.component.html'
})
export class PieChartWithCustomLabelsComponent {

  chartOpts: IChartistSettingsType;
  title = 'PIE CHART WITH CUSTOM LABELS';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['Bananas', 'Apples', 'Grapes'],
        series: [20, 15, 40]
      },
      options: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      },
      responsiveOptions: [
        ['screen and (min-width: 640px)', {
          chartPadding: 30,
          labelOffset: 100,
          labelDirection: 'explode',
          labelInterpolationFnc: function(value) {
            return value;
          }
        }],
        ['screen and (min-width: 1024px)', {
          labelOffset: 80,
          chartPadding: 20
        }]
      ],
      type: 'Pie'
    };
  }
}
