import { Component } from '@angular/core';
import {IChartistData, IChartistOptions, IChartistResponsiveOptions, IChartistSettingsType} from '../../../chartist/chartist.component';

@Component({
  selector: 'app-line-scatter-diagram',
  templateUrl: './line-scatter-diagram.component.html'
})
export class LineScatterDiagramComponent {

  chartOpts: IChartistSettingsType;
  title = 'LINE SCATTER DIAGRAM WITH RESPONSIVE SETTINGS';

  constructor() {
    this.chartOpts = this.generateResponsiveData();
  }

  generateResponsiveData(): IChartistSettingsType {
    const times = (n) => {
      return Array.apply(null, new Array(n));
    };
    let data: IChartistData;
    data = times(52).map(Math.random).reduce((mData, rnd, index) => {
      mData.labels.push(index + 1);
      mData.series.forEach((series) => {
        series.push(Math.random() * 100);
      });
      return mData;
    }, {
      labels: [],
      series: times(4).map(function () {
        return new Array();
      })
    });

    let options: IChartistOptions;
    options = {
      showLine: false,
      axisX: {
        labelInterpolationFnc: function (value, index) {
          return index % 13 === 0 ? 'W' + value : null;
        }
      }
    };

    let responsiveOptions: IChartistResponsiveOptions;
    responsiveOptions = [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function (value, index) {
              return index % 4 === 0 ? 'W' + value : null;
            }
          }
        }
      ]
    ];

    return {
      options: options,
      data: data,
      responsiveOptions: responsiveOptions
    };
  }

}
