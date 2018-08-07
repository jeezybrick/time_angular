import { Routes } from '@angular/router';

import { AlarmClockListComponent } from './alarm-clock-list/alarm-clock-list.component';
import { AlarmClockAddComponent } from './alarm-clock-add/alarm-clock-add.component';
import { AlarmClockEditComponent } from './alarm-clock-edit/alarm-clock-edit.component';


export const alarmClockRoutes: Routes = [
  { path: '', component: AlarmClockListComponent },
  {
    path: 'add',
    component: AlarmClockAddComponent,
   // canActivate: [ContactsListExistsGuard]
  },
 {
    path: ':id/edit',
    component: AlarmClockEditComponent
  },
  {
    path: ':id',
    component: AlarmClockAddComponent
  },
];
