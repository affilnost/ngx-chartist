import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import * as Chartist from 'chartist';
import {IPieChartOptions} from 'chartist';

/**
 * Possible chart types
 * @type {String}
 */
export type ChartType = 'Pie' | 'Bar' | 'Line';

export type ChartInterfaces =
  | Chartist.IChartistPieChart
  | Chartist.IChartistBarChart
  | Chartist.IChartistLineChart;

export interface ChartLineSmooth {
  interpolation: 'cardinal' | 'simple' | 'none' | 'step';
  data: Chartist.IChartistInterpolationOptions | Chartist.IChartistSimpleInterpolationOptions
    | Chartist.IChartistCardinalInterpolationOptions | Chartist.IChartistStepInterpolationOptions;
}

export type ChartData = Chartist.IChartistData;
export type ChartOptions = Chartist.ILineChartOptions | Chartist.IBarChartOptions | IPieChartOptions;
// The right way would be here "Chartist.IResponsiveOptionTuple<ChartOptions>;",
// but there are problems when creating a variable with such a type
export type ResponsiveOptionTuple = Array<string | ChartOptions>;
export type ChartResponsiveOptions = ResponsiveOptionTuple[];


export interface ChartEvent {
  [eventName: string]: (data: any) => void;
}

export interface ChartSettingsType {
  data: ChartData;
  options: ChartOptions;
  events?: ChartEvent;
  lineSmooth?: ChartLineSmooth;
  responsiveOptions?: ChartResponsiveOptions;
  type?: ChartType;
}

@Component({
  selector: 'app-chartist',
  templateUrl: 'chartist.component.html',
  styleUrls: ['chartist.component.scss']
})
export class ChartistComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public data: Promise<ChartData> | ChartData;

  @Input() public type: Promise<ChartType> | ChartType;

  @Input()
  public options: Promise<ChartOptions> | ChartOptions;

  @Input()
  public lineSmooth: Promise<ChartLineSmooth> | ChartLineSmooth;

  @Input()
  public responsiveOptions: Promise<ChartResponsiveOptions> | ChartResponsiveOptions;

  @Input()
  public events: Promise<ChartEvent> | ChartEvent;

  public chart: ChartInterfaces;


  private element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  public ngOnInit(): Promise<ChartInterfaces> {
    if (!this.type || !this.data) {
      Promise.reject('Expected at least type and data.');
    }

    return this.renderChart().then((chart) => {
      if (this.events !== undefined) {
        this.bindEvents(chart);
      }

      return chart;
    });
  }


  public ngOnChanges(changes: SimpleChanges): void {
    if (this.element) {
      this.update(changes);
    }
  }

  public ngOnDestroy(): void {
    if (this.chart) {
      this.chart.detach();
    }
  }

  public renderChart(): Promise<ChartInterfaces> {
    const promises: any[] = [
      this.type,
      this.element,
      this.data,
      this.options,
      this.responsiveOptions
    ];

    if (this.lineSmooth) {
      switch (this.lineSmooth['interpolation']) {
        case 'cardinal': {
          this.options['lineSmooth'] = Chartist.Interpolation.cardinal(this.lineSmooth['data']);
          break;
        }
        case 'simple': {
          this.options['lineSmooth'] = Chartist.Interpolation.simple(this.lineSmooth['data']);
          break;
        }
        case 'none': {
          this.options['lineSmooth'] = Chartist.Interpolation.none(this.lineSmooth['data']);
          break;
        }
        case 'step': {
          this.options['lineSmooth'] = Chartist.Interpolation.step(this.lineSmooth['data']);
          break;
        }
      }
    }


    return Promise.all(promises).then((values) => {
      const [type, ...args]: any = values;

      if (!(type in Chartist)) {
        throw new Error(`${type} is not a valid chart type`);
      }

      this.chart = (Chartist as any)[type](...args);

      return this.chart;
    });
  }

  public update(changes: SimpleChanges): void {
    if (!this.chart || 'type' in changes) {
      this.renderChart();
    } else {
      if (changes.data) {
        this.data = changes.data.currentValue;
      }

      if (changes.options) {
        this.options = changes.options.currentValue;
      }
      (this.chart as any).update(this.data, this.options);
    }
  }

  public bindEvents(chart: any): void {
    for (const event of Object.keys(this.events)) {
      chart.on(event, this.events[event]);
    }
  }

}
