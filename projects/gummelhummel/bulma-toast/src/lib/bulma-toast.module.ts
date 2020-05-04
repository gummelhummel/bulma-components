import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BulmaToastService } from './bulma-toast.service';
import { BulmaToastComponent } from './bulma-toast.component';
import { BulmaToastConfiguration } from './bulma-toast-configuration';

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
export class BulmaToastModule {
  static forRoot(
    bulmaToastConfiguration: BulmaToastConfiguration
  ): ModuleWithProviders {
    return {
      ngModule: BulmaToastModule,
      providers: [
        {
          provide: BulmaToastConfiguration,
          useValue: bulmaToastConfiguration,
        }
      ]
    };
  }
}
