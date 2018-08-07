import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

import { AlarmClockService } from '../../../shared/services/alarm-clock.service';
import { HeaderIconsService } from '../../../shared/services/header-icons.service';
import { Alarm } from '../../../shared/models/alarm.model';

@Component({
  selector: 'app-alarm-clock-add',
  templateUrl: './alarm-clock-add.component.html',
  styleUrls: ['./alarm-clock-add.component.scss']
})
export class AlarmClockAddComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private headerIconsService: HeaderIconsService,
              private alarmClockService: AlarmClockService) {
  }

  ngOnInit() {
    this.headerIconsService.showBackIcon();
    this.headerIconsService.showSubmitIcon();

  }

  ngOnDestroy() {
    this.headerIconsService.hideBackIcon();
    this.headerIconsService.hideSubmitIcon();
  }

  public onFormSubmitted(alarmData: Alarm): void {
    this.alarmClockService.saveAlarmToList(alarmData)
      .pipe(
        untilComponentDestroyed(this)
      )
      .subscribe((data: Alarm[]) => {
        this.router.navigate(['/alarm-clock']);
      });
  }

}
