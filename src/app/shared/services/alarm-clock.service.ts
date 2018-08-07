import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Alarm } from '../models/alarm.model';

@Injectable({
  providedIn: 'root'
})
export class AlarmClockService {

  public alarms$ = new BehaviorSubject<Alarm[]>(this.getAlarmListFormLocalStorage());
  public alarm$ = new Subject<Alarm>();
  public editedAlarm$ = new Subject<Alarm>();

  constructor() {
  }

  public getAlarmList(): Observable<Alarm[]> {
    return this.alarms$.asObservable();
  }

  public getAlarmDetail(alarmId: number): Observable<Alarm> {

    return this.alarm$.asObservable();
  }

  public getEditedAlarmDetail(alarmId: number): Observable<Alarm> {

    return this.editedAlarm$.asObservable();
  }

  public setAlarmDetail(alarmId: number): Alarm {

    const alarm = this.getAlarmDetailFromStorage(alarmId);

    this.alarm$.next(alarm);

    return alarm;
  }

  public saveAlarmToList(alarmData): Observable<Alarm[]> {

    const alarms = this.getAlarmListFormLocalStorage();

    alarms.push(alarmData);
    localStorage.setItem('alarms', JSON.stringify(alarms));

    this.alarms$.next(alarms);

    return this.getAlarmList();
  }

  public saveAlarmDetail(alarmData): Alarm {

    const alarms = this.getAlarmListFormLocalStorage();

    const index = alarms.findIndex((item) => {
      return item.id === alarmData.id;
    });

    if (index > -1) {
      alarms[index] = alarmData;
    }

    localStorage.setItem('alarms', JSON.stringify(alarms));

    this.alarms$.next(alarms);
    this.editedAlarm$.next(alarmData);

    return alarmData;
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

  private getAlarmListFormLocalStorage(): Alarm[] {

    const alarms = localStorage.getItem('alarms');

    return JSON.parse(alarms) || [];
  }

  private getAlarmDetailFromStorage(alarmId: number): Alarm {

    const alarms = this.getAlarmListFormLocalStorage();

    const index = alarms.findIndex((item) => {
      return item.id === alarmId;
    });

    if (index > -1) {
      return alarms[index];
    }

  }


}
