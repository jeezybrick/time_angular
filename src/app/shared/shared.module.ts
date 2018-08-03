import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule, MatSlideToggleModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HeaderIconsComponent } from './components/header-icons/header-icons.component';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatExpansionModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [HeaderIconsComponent]
})
export class SharedModule { }
