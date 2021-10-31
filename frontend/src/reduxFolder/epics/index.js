import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, switchMap, catchError  } from 'rxjs/operators';
import {
    searchSkillsRequest,
    searchSkillsError,
    searchSkillsSuccess,
    searchSkillsReset,
} from './../actions/actions';

export const changeSearchEpic = action$ => action$.pipe(
    ofType('CHANGE_SEARCH_FIELD'),
    map( o => o.payload.search.trim()),
    filter( o => o !== ''),
    map( o => searchSkillsRequest(o))
)

export const SearchEpic = action$ => action$.pipe(
    ofType('SEARCH_SKILLS_REQUEST'),
    map( o => o.payload.search),
    map( o => new URLSearchParams({ q: o })),
    switchMap( o => ajax.getJSON(`${process.env.REACT_APP_SERCH_URL}?${o}`).pipe(
        map( o => searchSkillsSuccess(o)),
        catchError( e => of(searchSkillsError(e)))
        )),
)