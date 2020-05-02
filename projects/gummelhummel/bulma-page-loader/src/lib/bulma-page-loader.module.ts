import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaPageLoaderComponent } from './bulma-page-loader.component';
import { BulmaPageLoaderService } from './bulma-page-loader.service';

@NgModule({
  declarations: [
    BulmaPageLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BulmaPageLoaderService
  ],
  exports: [
    BulmaPageLoaderComponent
  ]
})
export class BulmaPageLoaderModule { }
