import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlarmClockService } from '../../../shared/services/alarm-clock.service';
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
  public alarmItemInRemoveMode: Alarm;
  private swipeCoord?: [number, number];
  private swipeTime?: number;

  constructor(private router: Router,
              private mainNavService: MainNavService,
              private alarmClockService: AlarmClockService) {
  }

  ngOnInit() {

    this.getAlarmList();

    this.mainNavService.showAddIcon();

    this.mainNavService.onEditIconPushed()
      .subscribe((data) => {

        this.isAlarmEditMode = true;

        this.mainNavService.hideEditIcon();
        this.mainNavService.showSubmitIcon();

      });

    this.mainNavService.onAddIconPushed()
      .subscribe((data) => {
        this.router.navigate(['/alarm-clock/add']);
      });

    this.mainNavService.onSubmitIconPushed()
      .subscribe((data) => {

        this.isAlarmEditMode = false;
        this.alarmItemInRemoveMode = null;

        this.mainNavService.hideSubmitIcon();
        this.mainNavService.showEditIcon();

      });

  }

  ngOnDestroy() {
    this.mainNavService.hideEditIcon();
    this.mainNavService.hideAddIcon();
    this.mainNavService.hideSubmitIcon();
  }

  private getAlarmList(): void {

    this.alarmClockService.getAlarmList()
      .subscribe((data: Alarm[]) => {

        this.alarmClocks = data;

        if (this.alarmClocks.length) {

          if (!this.isAlarmEditMode) {
            this.mainNavService.showEditIcon();
          }

        } else {
          this.mainNavService.hideEditIcon();
          this.mainNavService.hideSubmitIcon();
        }

      });

  }

  public goToEditAlarmClockPage(alarm: Alarm) {
    this.router.navigate(['/alarm-clock', alarm.id, 'edit']);
  }

  public showRemoveButton(event: Event, alarm: Alarm): void {
    event.stopPropagation();

    if (this.alarmItemInRemoveMode === alarm) {
      return;
    }
    this.alarmItemInRemoveMode = alarm;
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

  public isAlarmInRemoveMode(alarm: Alarm): boolean {
    return this.alarmItemInRemoveMode === alarm;
  }


  swipe(e: TouchEvent, when: string, alarm: Alarm): void {

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

        if (this.isAlarmEditMode) {

          if (swipe === 'previous') {

            if (this.alarmItemInRemoveMode === alarm) {
              this.alarmItemInRemoveMode = null;
            }

          } else {
            this.alarmItemInRemoveMode = alarm;
          }

        }


      }
    }

  }
}
