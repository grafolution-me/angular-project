import { Component, OnDestroy, OnInit } from '@angular/core';
import { DaoRecipeService } from '../../shared/dao.recipe.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private $user: Subscription;
  constructor(
    private dao: DaoRecipeService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>,
  ) {}

  ngOnInit() {
    this.$user = this.store
      .select('auth')
      .pipe(
        map(x => {
          return x.user;
        }),
      )
      .subscribe(data => {
        this.isAuthenticated = !!data;
      });
  }
  ngOnDestroy(): void {
    this.$user.unsubscribe();
  }

  putRecipes() {
    this.dao.storeRecipes().subscribe(data => {
      console.log(data);
    });
  }

  getRecipes() {
    this.dao.getRecipes().subscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}
