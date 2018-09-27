import { Component } from '@angular/core';
import {IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-distributed-series',
  templateUrl: './distributed-series.component.html'
})
export class DistributedSeriesComponent {

  chartOpts: IChartistSettingsType;
  title = 'DISTRIBUTED SERIES';

  constructor() {
    this.chartOpts = {
      data: {
        labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        series: [20, 60, 120, 200, 180, 20, 10]
      },
      options: {
        distributeSeries: true
      },
      type: 'Bar'
    };
  }
}
