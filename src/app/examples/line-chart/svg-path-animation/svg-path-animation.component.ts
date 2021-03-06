import {Component} from '@angular/core';
import {NgxChartistService} from 'ngx-chartist';
import {IChartistSettingsType} from 'ngx-chartist';


@Component({
  selector: 'app-svg-path-animation',
  templateUrl: './svg-path-animation.component.html'
})
export class SvgPathAnimationComponent {

  chartOpts: IChartistSettingsType;
  title = 'SVG PATH ANIMATION';

  constructor(chartistService: NgxChartistService) {
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
