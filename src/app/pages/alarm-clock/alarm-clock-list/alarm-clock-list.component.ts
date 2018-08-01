import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlarmClockService } from '../../../shared/services/alarm-clock.service';
import { Router } from '@angular/router';
import { MainNavService } from '../../../shared/services/main-nav.service';

@Component({
  selector: 'app-alarm-clock-list',
  templateUrl: './alarm-clock-list.component.html',
  styleUrls: ['./alarm-clock-list.component.scss']
})
export class AlarmClockListComponent implements OnInit, OnDestroy {

  public isAlarmEditMode: boolean;
  public alarmClocks: any = [{
    id: 1,
    disabled: true
  },
    {
      id: 2,
      disable: false
    }];
  public isAlarmClockListLoading = false;
  private swipeCoord?: [number, number];
  private swipeTime?: number;

  constructor(private router: Router,
              private mainNavService: MainNavService,
              private alarmClockService: AlarmClockService) {
  }

  ngOnInit() {

    this.mainNavService.showModifyIcons();

    this.alarmClockService.isEditMode()
      .subscribe((value) => {

        this.isAlarmEditMode = value;

        if (!this.isAlarmEditMode) {

         this.alarmClocks = this.alarmClocks.map((item) => {
            item.removeMode = false;
            return item;
         });
        }

      });

  }

  ngOnDestroy() {
    this.mainNavService.hideModifyIcons();
  }

  public goToEditAlarmClockPage(clock) {
    this.router.navigate(['/alarm-clock', clock.id, 'edit']);
  }

  public showRemoveButton(event: Event, clock): void {
    event.stopPropagation();
    clock.removeMode = true;
  }

  public removeAlarmClockFormList(clock): void {

    const index = this.alarmClocks.findIndex((clockItem) => {
      return clockItem.id === clock.id;
    });

    if (index > -1) {
      this.alarmClocks.splice(index, 1);
    }

  }


  swipe(e: TouchEvent, when: string, clock): void {

    const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        const swipe = direction[0] < 0 ? 'next' : 'previous';

        if (swipe === 'previous') {
          clock.removeMode = false;
        }
      }
    }

  }
}
