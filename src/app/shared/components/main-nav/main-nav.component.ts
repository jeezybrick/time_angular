import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AlarmClockService } from '../../services/alarm-clock.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  public isAlarmClockEditMode: Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute,
              private alarmClockService: AlarmClockService,
              private router: Router) {
    this.isAlarmClockEditMode = alarmClockService.isEditMode();
  }

  public goToAddAlarmClockPage() {
    this.router.navigate(['/alarm-clock/add']);
  }

  public closeSidebarByClick(drawer): void {

    if (drawer.mode === 'over') {
      drawer.close();
    }
  }

  public enableEditMode() {
    this.alarmClockService.enableEditMode();
  }

  public disableEditMode() {
    this.alarmClockService.disableEditMode();
  }

}
