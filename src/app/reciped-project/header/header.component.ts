import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(menu: string) {
        this.menuSelected.emit(menu);
  }
}
