import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-clock-add',
  templateUrl: './alarm-clock-add.component.html',
  styleUrls: ['./alarm-clock-add.component.scss']
})
export class AlarmClockAddComponent implements OnInit {

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
  public savedData: any;

  constructor() { }

  ngOnInit() {
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

    const data = {
      time: this.time,
      daysOfWeek: this.userRepeatChoices,
      alarmName: this.alarmName,
      melody: this.userMelodyChoice,
      isRepeatSignal: this.userRepeatSignalChoice
    };

    this.savedData = data;

    console.log(data);
  }

}
