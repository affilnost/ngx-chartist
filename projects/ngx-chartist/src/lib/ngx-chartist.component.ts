import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import * as Chartist from 'chartist';
import {IPieChartOptions} from 'chartist';

// workaround, until https://github.com/DefinitelyTyped/DefinitelyTyped/pull/25839#issuecomment-389833225
// is merged
export interface ILineChartOptions extends Chartist.IChartOptions {
  axisX?: Chartist.IChartistStepAxis | Chartist.IChartistFixedScaleAxis | Chartist.IChartistAutoScaleAxis;
  axisY?: Chartist.IChartistStepAxis | Chartist.IChartistFixedScaleAxis | Chartist.IChartistAutoScaleAxis;
  width?: number | string;
  height?: number | string;
  showLine?: boolean;
  showPoint?: boolean;
  showArea?: boolean;
  areaBase?: number;
  lineSmooth?: Function | boolean;
  low?: number;
  high?: number;
  ticks?: Array<string | number>;
  chartPadding?: Chartist.IChartPadding;
  fullWidth?: boolean;
  classNames?: Chartist.ILineChartClasses;
  series: {
    [key: string]: {
      lineSmooth?: Function | boolean;
      showLine?: boolean;
      showPoint?: boolean;
      showArea?: boolean;
      areaBase?: number;
    }
  };
}

/**
 * Possible chart types
 * @type {String}
 */
export type IChartistType = 'Pie' | 'Bar' | 'Line';

export type IChartistBase =
  | Chartist.IChartistPieChart
  | Chartist.IChartistBarChart
  | Chartist.IChartistLineChart;

export interface IChartistLineSmooth {
  interpolation: 'cardinal' | 'simple' | 'none' | 'step';
  data: Chartist.IChartistInterpolationOptions | Chartist.IChartistSimpleInterpolationOptions
    | Chartist.IChartistCardinalInterpolationOptions | Chartist.IChartistStepInterpolationOptions;
}

// START WORKAROUND (bugs in "time-series-with-momentjs" and "holes-in-data" and "filled-holes-in-data")
// TODO: do a pull-request in @types/chartists with this fix
// This is one of the bugs reported: https://github.com/gionkunz/chartist-js/issues/1076
export interface IChartistDataPoint {
  x: number | Date;
  y: number | Date;
}
export interface IChartistSeriesData {
  name?: string;
  value?: number;
  data?: Array<number> | Array<IChartistDataPoint>;
  className?: string;
  meta?: string; // I assume this could probably be a number as well?
}
export interface IChartistData {
  labels?: Array<string> | Array<number> | Array<Date>;
  series: Array<IChartistSeriesData> | Array<Array<IChartistData>> | Array<number> |  Array<Array<number> | Array<IChartistDataPoint>>;
}

// export type IChartistData = Chartist.IChartistData;

// END WORKAROUND


// workaround, until https://github.com/DefinitelyTyped/DefinitelyTyped/pull/25839#issuecomment-389833225
// is merged
export type IChartistOptions = ILineChartOptions | Chartist.IBarChartOptions | IPieChartOptions;
// export type IChartistOptions = Chartist.ILineChartOptions | Chartist.IBarChartOptions | IPieChartOptions;

// The right way would be here "Chartist.IResponsiveOptionTuple<ChartOptions>;",
// but there are problems when creating a variable with such a type
export type IChartistResponsiveOptionTuple = Array<string | IChartistOptions>;
export type IChartistResponsiveOptions = IChartistResponsiveOptionTuple[];


export interface IChartistEvent {
  [eventName: string]: (data: any) => void;
}

export interface IChartistSettingsType {
  data: IChartistData;
  options: IChartistOptions;
  events?: IChartistEvent;
  lineSmooth?: IChartistLineSmooth;
  responsiveOptions?: IChartistResponsiveOptions;
  type?: IChartistType;
}

@Component({
  selector: 'lib-ngx-chartist',
  styleUrls: ['chartist.component.scss'],
  template: ''
})
export class NgxChartistComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public data: Promise<IChartistData> | IChartistData;

  @Input() public type: Promise<IChartistType> | IChartistType;

  @Input()
  public options: Promise<IChartistOptions> | IChartistOptions;

  @Input()
  public lineSmooth: Promise<IChartistLineSmooth> | IChartistLineSmooth;

  @Input()
  public responsiveOptions: Promise<IChartistResponsiveOptions> | IChartistResponsiveOptions;

  @Input()
  public events: Promise<IChartistEvent> | IChartistEvent;

  public chart: IChartistBase;


  private element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  public ngOnInit(): Promise<IChartistBase> {
    debugger;
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

  public renderChart(): Promise<IChartistBase> {
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
