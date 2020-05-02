import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mdi-icon',
  template: `<i [style.font-size.px]="size" [ngClass]="getClasses()"></i>`,
  styles: []
})
export class MdiIconComponent {

  @Input() size = 'inherit';
  @Input() spin = false;
  @Input() type = 'star-face';
  @Input() disabled = false;
  @Input() dark = false;
  @Input() rotate = 0;

  constructor() { }

  getClasses() {
    let classList = 'mdi mdi-' + this.type;
    classList += this.spin ? ' mdi-spin' : '';
    classList += this.disabled ? '  mdi-inactive' : '';
    classList += this.dark ? ' mdi-dark' : ' mdi-light';
    classList += ' mdi-rotate-' + this.rotate;

    return classList;
  }

}
