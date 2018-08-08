import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Alarm } from '../models/alarm.model';
import { startWith } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AlarmClockService {

  public alarms$ = new BehaviorSubject<Alarm[]>(this.getAlarmListFormLocalStorage());
 // public alarm$ = new BehaviorSubject<Alarm>(null);
  public alarm$ = new Subject<Alarm>();

  constructor() {
  }

  public getAlarmList(): Observable<Alarm[]> {

    const alarms = this.getAlarmListFormLocalStorage();

    return of(alarms);
   // return this.alarms$.asObservable();
  }

  public getAlarmDetail(alarmId: number): Observable<Alarm> {

    const alarm = this.getAlarmDetailFromStorage(alarmId);

    // return this.alarm$.asObservable().pipe(startWith(alarm));
    return of(alarm);
  }

  public saveAlarmToList(alarmData): Observable<Alarm[]> {

    const alarms = this.getAlarmListFormLocalStorage();

    alarms.push(alarmData);
    localStorage.setItem('alarms', JSON.stringify(alarms));

    return this.getAlarmList();
  }

  public saveAlarmDetail(alarmData): Observable<Alarm> {

    const alarms = this.getAlarmListFormLocalStorage();

    const index = alarms.findIndex((item) => {
      return item.id === alarmData.id;
    });

    if (index > -1) {
      alarms[index] = alarmData;
    }

    localStorage.setItem('alarms', JSON.stringify(alarms));

    return this.getAlarmDetail(alarmData.id);
  }

  public removeAlarmFromList(alarmData): Observable<Alarm> {

    const alarms = this.getAlarmListFormLocalStorage();

    const index = alarms.findIndex((item) => {
      return item.id === alarmData.id;
    });

    if (index > -1) {
      alarms.splice(index, 1);
    }

    localStorage.setItem('alarms', JSON.stringify(alarms));

    return of(alarmData);
  }

  public disableAlarmItem(alarmData: Alarm): Observable<Alarm[]> {

    const alarms = this.getAlarmListFormLocalStorage();

    const index = alarms.findIndex((item) => {
      return item.id === alarmData.id;
    });

    if (index > -1) {
      alarms[index].disable = !alarmData.disable;
    }

    localStorage.setItem('alarms', JSON.stringify(alarms));

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
