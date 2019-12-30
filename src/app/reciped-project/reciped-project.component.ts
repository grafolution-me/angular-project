import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-reciped-project',
  templateUrl: './reciped-project.component.html',
  styleUrls: ['./reciped-project.component.scss'],

})
export class RecipedProjectComponent implements OnInit {
  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
    this.authService.retrieveUserData();
  }
}
