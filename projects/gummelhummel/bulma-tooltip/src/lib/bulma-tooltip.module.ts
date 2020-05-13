import { NgModule } from '@angular/core';
import { BulmaTooltipDirective } from './bulma-tooltip.directive';

@NgModule({
  declarations: [
    BulmaTooltipDirective
  ],
  exports: [
    BulmaTooltipDirective
  ]
})
export class BulmaTooltipModule { }
