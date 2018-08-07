import { Component, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { takeUntil } from 'rxjs/internal/operators';
import { ReplaySubject } from 'rxjs';
import { AlarmClockListComponent } from './pages/alarm-clock/alarm-clock-list/alarm-clock-list.component';
import { AlarmClockService } from './shared/services/alarm-clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnDestroy {


  public loading = true;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private alarmClockService: AlarmClockService,
              private router: Router) {
    router.events
      .pipe(
       // untilComponentDestroyed(this),
        takeUntil(this.destroyed$)
      )
      .subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

   ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

}
