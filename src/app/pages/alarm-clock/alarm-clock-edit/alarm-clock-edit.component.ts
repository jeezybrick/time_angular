import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

import { AlarmClockService } from '../../../shared/services/alarm-clock.service';
import { HeaderIconsService } from '../../../shared/services/header-icons.service';
import { Alarm } from '../../../shared/models/alarm.model';

@Component({
  selector: 'app-alarm-clock-edit',
  templateUrl: './alarm-clock-edit.component.html',
  styleUrls: ['./alarm-clock-edit.component.scss']
})
export class AlarmClockEditComponent implements OnInit, OnDestroy {

  public alarmData: Alarm;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private headerIconsService: HeaderIconsService,
              private alarmClockService: AlarmClockService) {
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.getAlarmDetail(+id);
    }

    this.headerIconsService.showBackIcon();
    this.headerIconsService.showSubmitIcon();

  }

  ngOnDestroy() {
    this.headerIconsService.hideBackIcon();
    this.headerIconsService.hideSubmitIcon();
  }

  private getAlarmDetail(id: number): void {

    this.alarmClockService.getAlarmDetail(id)
      .pipe(
        untilComponentDestroyed(this)
      )
      .subscribe((data: Alarm) => {

        if (!data) {
          this.location.back();
        }

        this.alarmData = data;
      });

  }

  public onFormSubmitted(alarmData: Alarm): void {

      this.alarmClockService.saveAlarmDetail(alarmData)
        .pipe(
          untilComponentDestroyed(this)
        )
        .subscribe((data: Alarm) => {
          this.router.navigate(['/alarm-clock']);
        });

  }

}
