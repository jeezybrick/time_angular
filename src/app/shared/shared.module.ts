import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule, MatSlideToggleModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class SharedModule { }
