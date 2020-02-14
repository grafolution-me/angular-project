import { Actions, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthResponseData } from '../AuthResponseData';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return (
        this.http
          // tslint:disable-next-line:max-line-length
          .post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_i4C1ZnUYhPSukaxZkfqJzwJctRp0uYw',
            {
              email: authData.payload.email,
              password: authData.payload.password,
              returnSecureToken: true,
            },
          )
          .pipe(
            map(resData => {
              const expDate = new Date(
                new Date().getTime() + +resData.expiresIn * 1000,
              );
              return of(
                new AuthActions.Login({
                  email: resData.email,
                  userId: resData.localId,
                  token: resData.idToken,
                  expirationDate: expDate,
                }),
              );
            }),
            catchError(error => {
              return of();
            }),
          )
      );
    }),
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
