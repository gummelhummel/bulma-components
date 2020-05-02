import { Injectable } from '@angular/core';
import { BulmaToast } from './bulma-toast.interface';

@Injectable()
export class BulmaToastService {

  // tslint:disable-next-line: variable-name
  private _toasts: BulmaToast[];

  constructor() {
    this._toasts = [];
    this.reduceToasts();
  }

  get toasts(): BulmaToast[] {
    return this._toasts;
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
