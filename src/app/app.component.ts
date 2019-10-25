import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from './store/reducers/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<fromApp.AppState>,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.error$ = this.store.select(store => store.scroller.error);
    this.loading$ = this.store.select(store => store.scroller.loading);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

}
