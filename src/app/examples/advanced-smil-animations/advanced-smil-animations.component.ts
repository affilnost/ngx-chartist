import {Component} from '@angular/core';
import {ChartSettingsType} from '../../chartist/chartist.component';

@Component({
  selector: 'app-advanced-smil-animations',
  templateUrl: './advanced-smil-animations.component.html'
})
export class AdvancedSmilAnimationsComponent {

  chartOpts: ChartSettingsType;
  title = 'ADVANCED SMIL ANIMATIONS';

  constructor() {

    let seq = 0,
      delays = 80,
      durations = 500;

    this.chartOpts = {
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        series: [
          [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
          [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
          [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
          [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
        ]
      },
      options: {
        low: 0
      },
      events: {
        created: function () {
          seq = 0;
        },
        draw: function (data) {
          seq++;

          if (data.type === 'line') {
            // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
            data.element.animate({
              opacity: {
                // The delay when we like to start the animation
                begin: seq * delays + 1000,
                // Duration of the animation
                dur: durations,
                // The value where the animation should start
                from: 0,
                // The value where it should end
                to: 1
              }
            });
          } else if (data.type === 'label' && data.axis === 'x') {
            data.element.animate({
              y: {
                begin: seq * delays,
                dur: durations,
                from: data.y + 100,
                to: data.y,
                // We can specify an easing function from Chartist.Svg.Easing
                easing: 'easeOutQuart'
              }
            });
          } else if (data.type === 'label' && data.axis === 'y') {
            data.element.animate({
              x: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 100,
                to: data.x,
                easing: 'easeOutQuart'
              }
            });
          } else if (data.type === 'point') {
            data.element.animate({
              x1: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
              },
              x2: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
              },
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
              }
            });
          } else if (data.type === 'grid') {
            // Using data.axis we get x or y which we can use to construct our animation definition objects
            const pos1Animation = {
              begin: seq * delays,
              dur: durations,
              from: data[data.axis.units.pos + '1'] - 30,
              to: data[data.axis.units.pos + '1'],
              easing: 'easeOutQuart'
            };

            const pos2Animation = {
              begin: seq * delays,
              dur: durations,
              from: data[data.axis.units.pos + '2'] - 100,
              to: data[data.axis.units.pos + '2'],
              easing: 'easeOutQuart'
            };

            const animations = {};
            animations[data.axis.units.pos + '1'] = pos1Animation;
            animations[data.axis.units.pos + '2'] = pos2Animation;
            animations['opacity'] = {
              begin: seq * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: 'easeOutQuart'
            };

            data.element.animate(animations);
          }
        }
      }
    };
  }


}
