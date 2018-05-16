import { Injectable } from '@angular/core';
import * as Chartist from 'chartist';

export type ChartSvg = Chartist.IChartistSvg;

@Injectable()
export class ChartistService {

  constructor() { }

  public generateSvg(name: HTMLElement | string, attributes: Object, className?: string, parent?: Object, insertFirst?: boolean): ChartSvg {
    return new Chartist.Svg(name, attributes, className, parent, insertFirst);
  }
  public getSvgEasing(easingName: string) {
    return Chartist.Svg.Easing[easingName];
  }
  public getInterpolationFunction(interpolationType: string): Function {
    return Chartist.Interpolation[interpolationType];
  }
  public getChartistVar(name: string): any {
    return Chartist['name'];
  }

}
