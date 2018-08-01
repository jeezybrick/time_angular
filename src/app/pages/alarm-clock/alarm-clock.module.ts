import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { alarmClockRoutes } from './alarm-clock.route';
import { AlarmClockListComponent } from './alarm-clock-list/alarm-clock-list.component';
import { AlarmClockAddComponent } from './alarm-clock-add/alarm-clock-add.component';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(alarmClockRoutes)
  ],
  declarations: [AlarmClockListComponent, AlarmClockAddComponent]
})
export class AlarmClockModule { }
