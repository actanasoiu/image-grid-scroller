import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PhotoModel } from './../../models/photo.model';
import * as fromApp from '../../../store/reducers/app.reducer';
import * as ScrollerActions from '../../store/scroller.actions';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {

  photos$: Observable<PhotoModel[]>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ScrollerActions.GetPhotosList());
    this.photos$ = this.store.select(store => store.scroller.photos);
  }

}
