import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Alarm } from '../../../shared/models/alarm.model';
import { AlarmClockService } from '../../../shared/services/alarm-clock.service';
import { HeaderIconsService } from '../../../shared/services/header-icons.service';


@Component({
  selector: 'app-alarm-clock-add',
  templateUrl: './alarm-clock-add.component.html',
  styleUrls: ['./alarm-clock-add.component.scss']
})
export class AlarmClockAddComponent implements OnInit, OnDestroy {

  public repeatChoices: string[] = [
    'Каждый понедельник',
    'Каждый вторник',
    'Каждую среду',
    'Каждый четверг',
    'Каждую пятницу',
    'Каждую субботу',
    'Каждое восвресенье'
  ];

  public melodyList: string[] = [
    'Не выбран',
    'Lady Gaga',
    'Drake'
  ];

  public userRepeatChoices: string[] = [];
  public userMelodyChoice: string = this.melodyList[0];
  public userRepeatSignalChoice = false;
  public alarmName = 'Будильник';
  public time: Date = new Date();

  constructor(private router: Router,
              private headerIconsService: HeaderIconsService,
              private alarmClockService: AlarmClockService) {
  }

  ngOnInit() {
    this.headerIconsService.showBackIcon();
  }

  ngOnDestroy() {
    this.headerIconsService.hideBackIcon();
  }

  public toggleUserRepeatChoice(choice): void {

    const index = this.userRepeatChoices.indexOf(choice);

    if (index > -1) {
      this.userRepeatChoices.splice(index, 1);
    } else {
      this.userRepeatChoices.push(choice);
    }

  }

  public isChoiceInUserChoices(choice): boolean {
    return this.userRepeatChoices.includes(choice);
  }

  public setUserMelodyChoice(melody): void {
    this.userMelodyChoice = melody;
  }

  public isMelodyInUserChoice(melody): boolean {
    return this.userMelodyChoice === melody;
  }

  public saveChanges(): void {

    const saveData = {
      id: Math.floor(Math.random() * 100001),
      time: this.time,
      daysOfWeek: this.userRepeatChoices,
      name: this.alarmName.length ? this.alarmName : 'Будильник',
      melody: this.userMelodyChoice,
      isRepeatSignal: this.userRepeatSignalChoice,
      disable: false
    };

    this.alarmClockService.saveAlarmToList(saveData)
      .subscribe((data: Alarm[]) => {
        this.router.navigate(['/alarm-clock']);
      });

  }

}
