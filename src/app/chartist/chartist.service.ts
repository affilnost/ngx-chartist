import {Injectable} from '@angular/core';
import * as Chartist from 'chartist';

export type IChartistEscapeMap = Chartist.IChartistEscapeMap;
export type IChartistPieChart = Chartist.IChartistPieChart;
export type IChartistBarChart = Chartist.IChartistBarChart;
export type IChartistLineChart = Chartist.IChartistLineChart;
export type IChartistCandleChart = Chartist.IChartistCandleChart;
export type IFixedScaleAxisStatic = Chartist.IFixedScaleAxisStatic;
export type IAutoScaleAxisStatic = Chartist.IAutoScaleAxisStatic;
export type IStepAxisStatic = Chartist.IStepAxisStatic;
export type IChartistSvgStatic = Chartist.ChartistSvgStatic;
export type IChartistInterpolationStatic = Chartist.ChartistInterpolationStatic;


@Injectable()
export class ChartistService {

  getPrecision(): number {
    return Chartist.precision;
  }

  getEscapingMap(): IChartistEscapeMap {
    return Chartist.escapingMap;
  }

  getPie(): IChartistPieChart {
    return Chartist.Pie;
  }

  getBar(): IChartistBarChart {
    return Chartist.Bar;
  }

  getLine(): IChartistLineChart {
    return Chartist.Line;
  }

  getCandle(): IChartistCandleChart {
    return Chartist.Candle;
  }

  getFixedScaleAxis(): IFixedScaleAxisStatic {
    return Chartist.FixedScaleAxis;
  }

  getAutoScaleAxis(): IAutoScaleAxisStatic {
    return Chartist.AutoScaleAxis;
  }

  getStepAxis(): IStepAxisStatic {
    return Chartist.StepAxis;
  }

  getSvg(): IChartistSvgStatic {
    return Chartist.Svg;
  }

  getInterpolation(): IChartistInterpolationStatic {
    return Chartist.Interpolation;
  }

  getNoop(): Function {
    return Chartist.noop;
  }

  getPlugins(): any {
    return Chartist.plugins;
  }

  alphaNumerate(n: number): string {
    return Chartist.alphaNumerate(n);
  }

  extend(target: Object, ...sources: Object[]): Object {
    return Chartist.extend(target, ...sources);
  }

  replaceAll(str: string, subStr: string, newSubStr: string): string {
    return Chartist.replaceAll(str, subStr, newSubStr);
  }

  ensureUnit(value: number, unit: string): string {
    return Chartist.ensureUnit(value, unit);
  }

  quantity(input: string | number): Object {
    return Chartist.quantity(input);
  }

  query(query: Node | string): Node {
    return Chartist.query(query);
  }

  times(length: number): Array<any> {
    return Chartist.times(length);
  }

  sum(previous: number, current: number): number {
    return Chartist.sum(previous, current);
  }

  mapMultiply(factor: number): (num: number) => number {
    return Chartist.mapMultiply(factor);
  }

  mapAdd(addend: number): (num: number) => number {
    return Chartist.mapAdd(addend);
  }

  serialMap(arr: Array<any>, cb: Function): Array<any> {
    return Chartist.serialMap(arr, cb);
  }

  roundWithPrecision(value: number, digits?: number): number {
    return Chartist.roundWithPrecision(value, digits);
  }

  getMultiValue(value: any, dimension?: any): number {
    return Chartist.getMultiValue(value, dimension);
  }

  serialize(data: Object | string | number): string {
    return Chartist.serialize(data);
  }

  deserialize(data: string): Object | string | number {
    return Chartist.deserialize(data);
  }

  createSvg(container: Node, width: string, height: string, className: string): Object {
    return Chartist.createSvg(container, width, height, className);
  }

  // These methods are deprecated
  /*
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
  */

}
