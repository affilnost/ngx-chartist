import {Component, OnInit} from '@angular/core';
import {ChartSettingsType} from '../../../chartist/chartist.component';
import {ChartistService} from '../../../chartist/chartist.service';

@Component({
  selector: 'app-using-events-to-replace-graphics',
  templateUrl: './using-events-to-replace-graphics.component.html'
})
export class UsingEventsToReplaceGraphicsComponent {

  chartOpts: ChartSettingsType;
  title = 'USING EVENTS TO REPLACE GRAPHICS';

  constructor(chartistService: ChartistService) {
    this.chartOpts = {
      data: {
        labels: [1, 2, 3, 4, 5],
        series: [
          [12, 9, 7, 8, 5]
        ]
      },
      options: {},
      events: {
        // Listening for draw events that get emitted by the Chartist chart
        draw: function (mData) {
          // If the draw event was triggered from drawing a point on the line chart
          if (mData.type === 'point') {
            // We are creating a new path SVG element that draws a triangle around the point coordinates
            const svg = chartistService.getSvg();
            const triangle = new svg('path', {
              d: ['M',
                mData.x,
                mData.y - 15,
                'L',
                mData.x - 15,
                mData.y + 8,
                'L',
                mData.x + 15,
                mData.y + 8,
                'z'].join(' '),
              style: 'fill-opacity: 1'
            }, 'ct-area');

            // With data.element we get the Chartist SVG wrapper and we can replace the original point
            // drawn by Chartist with our newly created triangle
            mData.element.replace(triangle);
          }
        }
      }
    };
  }

}
