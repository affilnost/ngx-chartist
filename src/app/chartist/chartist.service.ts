import { Injectable } from '@angular/core';
import * as Chartist from 'chartist';

export type ChartSvg = Chartist.IChartistSvg;

@Injectable()
export class ChartistService {

  constructor() { }

  public generateSvg(name: HTMLElement | string, attributes: Object, className?: string, parent?: Object, insertFirst?: boolean): ChartSvg {
    return new Chartist.Svg(name, attributes, className, parent, insertFirst);
  }

}
