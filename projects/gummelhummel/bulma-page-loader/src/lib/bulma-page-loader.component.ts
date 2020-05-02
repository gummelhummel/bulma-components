import { Component } from '@angular/core';
import { BulmaPageLoaderService } from './bulma-page-loader.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bulma-page-loader',
  templateUrl: './bulma-page-loader.component.html'
})
export class BulmaPageLoaderComponent {
  constructor(public bulmaPageLoaderService: BulmaPageLoaderService) { }
}
