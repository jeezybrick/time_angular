import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Alarm } from '../models/alarm.model';

@Injectable({
  providedIn: 'root'
})
export class AlarmClockService {

  public isEditMode$ = new BehaviorSubject<boolean>(false);
  public alarms$ = new BehaviorSubject<Alarm[]>(this.getAlarmListFormLocalStorage());

  constructor() {
  }

  public getAlarmList(): Observable<Alarm[]> {
    return this.alarms$.asObservable();
  }

  private getAlarmListFormLocalStorage(): Alarm[] {
    const alarms = localStorage.getItem('alarms');
    return JSON.parse(alarms) || [];
  }

  public saveAlarmToList(alarmData): Observable<Alarm[]> {
    const alarms = this.getAlarmListFormLocalStorage();
    alarms.push(alarmData);
    localStorage.setItem('alarms', JSON.stringify(alarms));

    this.alarms$.next(alarms);

    return this.getAlarmList();
  }

  public removeAlarmFromList(alarmData): Observable<Alarm[]> {
    const alarms = this.getAlarmListFormLocalStorage();

    const index = alarms.findIndex((item) => {
      return item.id === alarmData.id;
    });

    if (index > -1) {
      alarms.splice(index, 1);
    }

    localStorage.setItem('alarms', JSON.stringify(alarms));

    this.alarms$.next(alarms);

    return this.getAlarmList();
  }

  public disableAlarmItem(alarmData: Alarm): Observable<Alarm[]> {

    const alarms = this.getAlarmListFormLocalStorage();

    const index = alarms.findIndex((item) => {
      return item.id === alarmData.id;
    });

    if (index > -1) {
      alarms[index].disable = !alarmData.disable;
    }

    console.log(alarms);

    localStorage.setItem('alarms', JSON.stringify(alarms));

    this.alarms$.next(alarms);

    return this.getAlarmList();
  }

  public isEditMode(): Observable<boolean> {
    return this.isEditMode$.asObservable();
  }

  public enableEditMode() {
    this.isEditMode$.next(true);
  }

  public disableEditMode() {
    this.isEditMode$.next(false);
  }


}
