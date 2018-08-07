import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { alarmClockRoutes } from './alarm-clock.route';
import { AlarmClockListComponent } from './alarm-clock-list/alarm-clock-list.component';
import { AlarmClockAddComponent } from './alarm-clock-add/alarm-clock-add.component';
import { SharedModule } from '../../shared/shared.module';
import { AlarmModifyFormComponent } from './alarm-modify-form/alarm-modify-form.component';
import { AlarmClockEditComponent } from './alarm-clock-edit/alarm-clock-edit.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(alarmClockRoutes)
  ],
  declarations: [
    AlarmClockListComponent,
    AlarmClockAddComponent,
    AlarmModifyFormComponent,
    AlarmClockEditComponent
  ]
})
export class AlarmClockModule { }
