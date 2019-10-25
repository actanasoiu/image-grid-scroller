import { Component, OnInit, Input } from '@angular/core';

import { PhotoModel } from './../../models/photo.model';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {

  @Input() data: PhotoModel;

  constructor() { }

  ngOnInit() {
  }

}
