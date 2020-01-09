import {Component, OnDestroy, OnInit} from '@angular/core';
import {DaoRecipeService} from '../../shared/dao.recipe.service';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
 private $user: Subscription;
  constructor(private dao: DaoRecipeService, private authService: AuthService) {
  }

  ngOnInit() {
    this.$user = this.authService.user.subscribe(data => {
      this.isAuthenticated = !data ? false : true;
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
