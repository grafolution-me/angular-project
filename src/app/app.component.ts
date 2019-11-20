import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practise-projects';

  constructor(private breakpointObserver: BreakpointObserver) {}

  sidenavBreakpoint = 768;
  sidenavFixedTopGap = 65;
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  ngOnInit() {
    //console.log(window.innerWidth)

    this.sidenavBreakpointLogic(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sidenavBreakpointLogic(event.target.innerWidth);
  }

  sidenavBreakpointLogic(checkWidth) {
    if (checkWidth < this.sidenavBreakpoint) {
      this.opened = false;
    } else {
      this.opened = true;
    }
    this.sidenav.fixedTopGap = this.sidenavFixedTopGap;
  }

  isBiggerScreen() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < this.sidenavBreakpoint) {
      return true;
    } else {
      return false;
    }
  }
}
