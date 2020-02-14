import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthResponseData } from './AuthResponseData';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  @ViewChild('authForm', { static: false }) authForm: NgForm;
  isLoading = false;
  error: string;
  private registered = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>,
  ) {}

  ngOnInit() {}

  isRegistered() {
    return this.registered;
  }

  setRegistered(val: boolean) {
    this.registered = val;
  }

  onSubmit() {
    this.isLoading = true;
    if (this.authForm.invalid) {
      return;
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    this.authenticateUser(email, password);

    this.authForm.reset();
  }

  private authenticateUser(email: string, password: string) {
    let observableAuth: Observable<AuthResponseData> = null;
    if (!this.registered) {
      observableAuth = this.authService.signUp(email, password);
    } else {
      // observableAuth = this.authService.login(email, password);
      this.store.dispatch(
        new AuthActions.LoginStart({
          email: email,
          password: password,
        }),
      );
    }
    if (observableAuth != null) {
      observableAuth.subscribe(
        data => {
          this.isLoading = false;
          this.router.navigate(['/reciped/recipes']);
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        },
      );
    }
  }
}
