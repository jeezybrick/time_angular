import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ShellComponent } from './core/shell/shell.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    data: { state: 'shell'},
    children: [
      {path: '', redirectTo: 'alarm-clock', pathMatch: 'full'},
      {
        path: 'alarm-clock',
        loadChildren: './pages/alarm-clock/alarm-clock.module#AlarmClockModule'
      }
    ]
  },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
