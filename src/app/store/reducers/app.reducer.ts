import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import * as fromScroller from '../../scroller/store/scroller.reducer';

export interface AppState {
  scroller: fromScroller.State;
}

export const reducers: ActionReducerMap<AppState> = {
  scroller: fromScroller.scrollerReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
