import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reciped-project',
  templateUrl: './reciped-project.component.html',
  styleUrls: ['./reciped-project.component.scss'],

})
export class RecipedProjectComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.authService.retrieveUserData();
    this.authService.user.subscribe(data => {
        this.isAuthenticated = !data ? false : true;
      }
    );
    if (this.isAuthenticated) {
      this.router.navigate(['recipes'], {relativeTo: this.route});
    } else {
      this.router.navigate(['auth'], {relativeTo: this.route});
    }
  }
}
