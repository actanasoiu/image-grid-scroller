import { Action } from '@ngrx/store';

import { PhotoModel } from './../models/photo.model';

export enum ScrollerActionType {
    GET_PHOTOS_LIST = '[Scroller] Get Photos List',
    SET_PHOTOS_LIST = '[Scroller] Set Photos List',
    SET_ERROR = '[Scroller] Set Error',
    LOADING = '[Scroller] Loading',
}

export class GetPhotosList implements Action {
    readonly type = ScrollerActionType.GET_PHOTOS_LIST;
}

export class SetPhotosList implements Action {
    readonly type = ScrollerActionType.SET_PHOTOS_LIST;

    constructor(public payload: PhotoModel[]) { }
}

export class SetError implements Action {
    readonly type = ScrollerActionType.SET_ERROR;

    constructor(public payload: string) { }
}

export class Loading implements Action {
    readonly type = ScrollerActionType.LOADING;
}

export type ScrollerActions =
    | GetPhotosList
    | SetPhotosList
    | SetError
    | Loading;
