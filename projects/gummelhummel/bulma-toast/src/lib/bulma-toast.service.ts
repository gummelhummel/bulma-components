import { Injectable } from '@angular/core';
import { BulmaToast } from './bulma-toast.interface';
import { BulmaToastPosition } from './bulma-toast-position.enum';
import { BulmaToastConfiguration } from './bulma-toast-configuration';

@Injectable()
export class BulmaToastService {

  // tslint:disable-next-line: variable-name
  private _toasts: BulmaToast[];
  // tslint:disable-next-line: variable-name
  private _position: BulmaToastPosition;

  constructor(private readonly bulmaToastConfiguration: BulmaToastConfiguration) {
    this._position = bulmaToastConfiguration.position || BulmaToastPosition.LEFT_BOTTOM;
    this._toasts = [];
    this.reduceToasts();
  }

  get toasts(): BulmaToast[] {
    return this._toasts;
  }

  get position(): BulmaToastPosition {
    return this._position;
  }

  show(toast: BulmaToast): void {
    this._toasts.push({ visible: true, ...toast });
  }

  hide(toastToHide: BulmaToast): void {
    toastToHide.visible = false;
    setTimeout(() => this._toasts = this._toasts.filter(toast => toast !== toastToHide), 1000);
  }

  private reduceToasts(): void {
    setTimeout(() => {
      for (const toast of this._toasts) {
        if (toast.time !== Infinity && toast.time >= 0) {
          toast.time -= 100;
          if (toast.time <= 0) {
            this.hide(toast);
          }
        }
      }
      this.reduceToasts();
    }, 100);
  }

}
