import {Component} from '@angular/core';
import {IChartistSettingsType} from '../../../chartist/chartist.component';
import {ChartistService} from '../../../chartist/chartist.service';

@Component({
  selector: 'app-series-overrides',
  templateUrl: './series-overrides.component.html'
})
export class SeriesOverridesComponent {

  chartOpts: IChartistSettingsType;
  title = 'SERIES OVERRIDES';

  constructor(chartistService: ChartistService) {
    this.chartOpts = {
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        // Naming the series with the series object array notation
        series: [{
          name: 'series-1',
          data: [5, 2, -4, 2, 0, -2, 5, -3]
        }, {
          name: 'series-2',
          data: [4, 3, 5, 3, 1, 3, 6, 4]
        }, {
          name: 'series-3',
          data: [2, 4, 3, 1, 4, 5, 3, 2]
        }]
      },
      options: {
        fullWidth: true,
        // Within the series options you can use the series names
        // to specify configuration that will only be used for the
        // specific series.

        series: {
          'series-1': {
            lineSmooth: chartistService.getInterpolation()['step']()
          },
          'series-2': {
            lineSmooth: chartistService.getInterpolation()['simple'](),
            showArea: true
          },
          'series-3': {
            showPoint: false
          }
        }
      },
      responsiveOptions: [
        // You can even use responsive configuration overrides to
        // customize your series configuration even further!
        ['screen and (max-width: 500px)', {
          series: {
            'series-1': {
              lineSmooth: chartistService.getInterpolation()['none']()
            },
            'series-2': {
              lineSmooth: chartistService.getInterpolation()['none'](),
              showArea: false
            },
            'series-3': {
              lineSmooth: chartistService.getInterpolation()['none'](),
              showPoint: true
            }
          }
        }]
      ]
    };
  }

}
