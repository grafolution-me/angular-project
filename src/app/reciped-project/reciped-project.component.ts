import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reciped-project',
  templateUrl: './reciped-project.component.html',
  styleUrls: ['./reciped-project.component.scss']
})
export class RecipedProjectComponent implements OnInit {
  private menu: string = 'recipe';
  constructor() { }

  ngOnInit() {
  }
  onMenuSelected(menu: string) {
    this.menu = menu;
  }
}
