import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BulmaToastService } from './bulma-toast.service';
import { BulmaToastComponent } from './bulma-toast.component';

@NgModule({
  declarations: [
    BulmaToastComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    BulmaToastService
  ],
  exports: [
    BulmaToastComponent
  ]
})
export class BulmaToastModule { }
