import { PhotoModel } from './../models/photo.model';
import * as ScrollerActions from './scroller.actions';

export interface State {
    photos: PhotoModel[];
    error: string;
    loading: boolean;
}

const initialState: State = {
    photos: [],
    error: '',
    loading: false
};

export function scrollerReducer(
    state = initialState,
    action: ScrollerActions.ScrollerActions
) {
    switch (action.type) {
        case ScrollerActions.ScrollerActionType.SET_PHOTOS_LIST:
            return {
                ...state,
                photos: [...action.payload],
                loading: false
            };
        case ScrollerActions.ScrollerActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case ScrollerActions.ScrollerActionType.LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}