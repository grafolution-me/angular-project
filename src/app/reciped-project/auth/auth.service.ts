import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {AuthResponseData} from './AuthResponseData';
import {UserModel} from './user.model';
import {Router} from '@angular/router';
import {IUserModel} from './user-interface.model';


@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);


  constructor(private http: HttpClient,
              private router: Router) {
  }

  signUp(email: string, password: string) {


    // tslint:disable-next-line:max-line-length
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_i4C1ZnUYhPSukaxZkfqJzwJctRp0uYw',
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError), tap(x => {
      this.handleAuthentication(x.email, x.localId, x.idToken, +x.expiresIn);
    }));
  }

  login(email: string, password: string) {
    return this.http
    // tslint:disable-next-line:max-line-length
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_i4C1ZnUYhPSukaxZkfqJzwJctRp0uYw', {
          email,
          password,
          returnSecureToken: true,
        }
      ).pipe(catchError(this.handleError),
        tap(resData => {
          console.log(resData);

          this.handleAuthentication(
              resData.email,
              resData.localId,
              resData.idToken,
              +resData.expiresIn);
          }
        ));
  }

  retrieveUserData() {
    const userD: IUserModel = JSON.parse(localStorage.getItem('userRecipedApp'));
    console.log(userD)
    if (!userD) {
      return;
    }
    const loadedUser = new UserModel(userD.email, userD.id, userD._token, new Date(userD._tokenExpriationDate));
    console.log(loadedUser )
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/reciped/auth']);
    localStorage.removeItem('userRecipedApp');
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + (expiresIn * 1000));
    const user = new UserModel(email, userId, token, expDate);
    console.log(user.token);
    this.user.next(user);
    localStorage.setItem('userRecipedApp', JSON.stringify(user));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = 'An error occured';
    if (err.error || err.error.error) {
      switch (err.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This Email is already used';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'The password is not correct';
          break;
      }
    }
    return throwError(errorMessage);
  }


}
