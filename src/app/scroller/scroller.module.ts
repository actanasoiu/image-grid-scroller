import { ScrollerRoutingModule } from './scroller-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { ImageItemComponent } from './components/image-item/image-item.component';

@NgModule({
  declarations: [ImageGridComponent, ImageItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ScrollingModule,
    ScrollerRoutingModule
  ]
})
export class ScrollerModule { }
