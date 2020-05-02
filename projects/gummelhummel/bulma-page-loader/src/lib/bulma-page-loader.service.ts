import { Injectable } from '@angular/core';
import { BulmaColor } from './bulma-color.enum';

@Injectable()
export class BulmaPageLoaderService {

  // tslint:disable-next-line: variable-name
  private _visible: boolean;
  // tslint:disable-next-line: variable-name
  private _message: string;
  // tslint:disable-next-line: variable-name
  private _color: BulmaColor;

  constructor() {
    this._visible = false;
  }

  show(message: string = '', color: BulmaColor = BulmaColor.PRIMARY): void {
    this._color = color;
    this._message = message;
    this._visible = true;
  }

  hide() {
    this._visible = false;
  }

  get message(): string {
    return this._message;
  }

  get visible(): boolean {
    return this._visible;
  }

  get color(): BulmaColor {
    return this._color;
  }
}
