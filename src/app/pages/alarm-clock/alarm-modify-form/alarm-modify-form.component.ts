import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Alarm } from '../../../shared/models/alarm.model';
import { Router } from '@angular/router';
import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';
import { HeaderIconsService } from '../../../shared/services/header-icons.service';

@Component({
  selector: 'app-alarm-modify-form',
  templateUrl: './alarm-modify-form.component.html',
  styleUrls: ['./alarm-modify-form.component.scss']
})
export class AlarmModifyFormComponent implements OnInit, OnDestroy {

  @Output() formSubmitted = new EventEmitter<Alarm>();
  @Input() userData: any = new Alarm(Math.floor(Math.random() * 100001), new Date(), [],  'Будильник',  'Не выбран', false);

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

  constructor(private router: Router,
              private headerIconsService: HeaderIconsService) {
  }

  ngOnInit() {

    console.log(this.userData);

    this.headerIconsService.onSubmitIconPushed()
      .pipe(
        untilComponentDestroyed(this)
      )
      .subscribe(() => {
        this.saveChanges();
      });

  }

  ngOnDestroy() {}

  public toggleUserRepeatChoice(choice): void {

    const index = this.userData.daysOfWeek.indexOf(choice);

    if (index > -1) {
      this.userData.daysOfWeek.splice(index, 1);
    } else {
      this.userData.daysOfWeek.push(choice);
    }

  }

  public isChoiceInUserChoices(choice): boolean {
    return this.userData.daysOfWeek.includes(choice);
  }

  public setUserMelodyChoice(melody): void {
    this.userData.melody = melody;
  }

  public isMelodyInUserChoice(melody): boolean {
    return this.userData.melody === melody;
  }

  private saveChanges(): void {

    const saveData = {
      id: this.userData.id,
      time: this.userData.time,
      daysOfWeek: this.userData.daysOfWeek,
      name: this.userData.name.length ? this.userData.name : 'Будильник',
      melody: this.userData.melody,
      isRepeatSignal: this.userData.isRepeatSignal,
      disable: false
    };

    this.formSubmitted.emit(saveData);

  }

}
