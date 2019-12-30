import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule, MatProgressSpinnerModule
} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from "@angular/material/sidenav";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule {}
