import {Component} from '@angular/core';
import {IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-donut-chart-using-fill',
  templateUrl: './donut-chart-using-fill.component.html'
})
export class DonutChartUsingFillComponent {

  chartOpts: IChartistSettingsType;
  title = 'DONUT CHART USING FILL RATHER THAN STROKE';

  constructor() {
    this.chartOpts = {
      data: {
        series: [20, 10, 30, 40]
      },
      options: {
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 270,
        showLabel: true
      },
      type: 'Pie'
    };
  }
}
