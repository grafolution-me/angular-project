import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {AuthResponseData} from './AuthResponseData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('authForm', {static: false}) authForm: NgForm;
  isLoading = false;
  error: string;
  private loggedIn = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setLogIn(val: boolean) {
    this.loggedIn = val;
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
    if (!this.loggedIn) {
      observableAuth = this.authService.signUp(email, password);
    } else {
      observableAuth = this.authService.login(email, password);
    }
    if (observableAuth != null) {
      observableAuth
        .subscribe((data) => {
          this.isLoading = false;
          this.router.navigate(['/reciped/recipes']);
        }, errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        });

    }
  }
}
