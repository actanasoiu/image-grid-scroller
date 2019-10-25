import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { RootObjectModel, PhotoModel } from './../models/photo.model';
import * as ScrollerActions from './scroller.actions';
import * as fromApp from '../../store/reducers/app.reducer';

const apiKey = 'e948b19001a13e1cf737bc40c45396fd';
const galleryId = '72157692049980335';

@Injectable()
export class ScrollerEffects {
    @Effect()
    getScrollerData = this.actions$.pipe(
        ofType(ScrollerActions.ScrollerActionType.GET_PHOTOS_LIST),
        switchMap(() => {
            this.store.dispatch(new ScrollerActions.Loading());
            return this.http.get<RootObjectModel>(
                // tslint:disable-next-line:max-line-length
                `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiKey}&gallery_id=${galleryId}&format=json&nojsoncallback=1`
            ).pipe(
                map((rootModel: RootObjectModel) => {
                    const photosData: PhotoModel[] = rootModel.photos.photo.map(x => {
                        x.description = `This is a description text`;
                        x.url = `https://farm${x.farm}.staticflickr.com/${x.server}/${x.id}_${x.secret}.jpg`;
                        return x;
                    });

                    const data = [];
                    for (let index = 0; index < 200; index++) {
                        data.push(...photosData);
                    }

                    return new ScrollerActions.SetPhotosList(data);
                }),
                catchError(val => {
                    return of(new ScrollerActions.SetError(`Ooops! Everything happens for a reason! <br>
                    Our servers are down but I'm sure the reason we have is really good ;)`));
                })
            );
        })
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>
    ) { }
}
