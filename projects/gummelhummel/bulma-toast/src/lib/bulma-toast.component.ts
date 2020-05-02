import { Component } from '@angular/core';
import { BulmaToastService } from './bulma-toast.service';
import { slideInRightOnEnterAnimation, slideOutRightOnLeaveAnimation } from 'angular-animations';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bulma-toast',
  templateUrl: './bulma-toast.component.html',
  styleUrls: ['./bulma-toast.component.scss'],
  animations: [
    slideInRightOnEnterAnimation(),
    slideOutRightOnLeaveAnimation(),
  ]
})
export class BulmaToastComponent {
  constructor(public bulmaToastService: BulmaToastService) { }
}
