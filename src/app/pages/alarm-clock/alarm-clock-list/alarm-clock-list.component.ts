import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlarmClockService } from '../../../shared/services/alarm-clock.service';
import { Router } from '@angular/router';
import { MainNavService } from '../../../shared/services/main-nav.service';
import { Alarm } from '../../../shared/models/alarm.model';

@Component({
  selector: 'app-alarm-clock-list',
  templateUrl: './alarm-clock-list.component.html',
  styleUrls: ['./alarm-clock-list.component.scss']
})
export class AlarmClockListComponent implements OnInit, OnDestroy {

  public isAlarmEditMode: boolean;
  public alarmClocks: Alarm[] = [];
  public isAlarmClockListLoading = false;
  private swipeCoord?: [number, number];
  private swipeTime?: number;

  constructor(private router: Router,
              private mainNavService: MainNavService,
              private alarmClockService: AlarmClockService) {
  }

  ngOnInit() {

    this.getAlarmList();

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

  private getAlarmList(): void {

    this.alarmClockService.getAlarmList()
      .subscribe((data) => {
        console.log(data);
        this.alarmClocks = data;
      });

  }

  public goToEditAlarmClockPage(alarm: Alarm) {
    this.router.navigate(['/alarm-clock', alarm.id, 'edit']);
  }

  public showRemoveButton(event: Event, clock): void {
    event.stopPropagation();
    clock.removeMode = true;
  }

  public removeAlarmClockFormList(alarm: Alarm): void {
    this.alarmClockService.removeAlarmFromList(alarm);
  }

  public toggleAlarmState(alarm: Alarm): void {

    this.alarmClockService.disableAlarmItem(alarm)
      .subscribe(() => {
        alarm.disable = !alarm.disable;
      });

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
