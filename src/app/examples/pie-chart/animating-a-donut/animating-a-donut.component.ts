import {Component} from '@angular/core';
import {IChartistSettingsType} from '../../../chartist/chartist.component';
import {ChartistService} from '../../../chartist/chartist.service';

@Component({
  selector: 'app-animating-a-donut',
  templateUrl: './animating-a-donut.component.html'
})
export class AnimatingADonutComponent {

  chartOpts: IChartistSettingsType;
  title = 'ANIMATING A DONUT WITH SVG.ANIMATE';

  constructor(chartistService: ChartistService) {
    const self = this;

    this.chartOpts = {
      data: {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
      },
      options: {
        donut: true,
        showLabel: false
      },
      events: {
        draw: function (data) {
          if (data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            const pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
              'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            const animationDefinition = {
              'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to: '0px',
                easing: chartistService.getSvg().Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze',
                begin: undefined
              }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if (data.index !== 0) {
              animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
              'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
          }
        },
        // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
        created: function (data) {
          let __anim21278907124;

          if (__anim21278907124) {
            clearTimeout(__anim21278907124);
            __anim21278907124 = null;
          }
          __anim21278907124 = setTimeout(() => {
            // This is a way to update (rerender) chart
            // generally you need to change any property to have it updated
            // Attention: in some Angular CLI versions it's important to have it inside of 'setTimeout',
            // otherwise there's an error
            self.chartOpts.responsiveOptions = [];
          }, 10000);
        }
      },
      type: 'Pie'
    };
  }

}
