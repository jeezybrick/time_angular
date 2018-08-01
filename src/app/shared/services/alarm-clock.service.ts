import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlarmClockService {

  public isEditMode$ = new BehaviorSubject<boolean>(false);

  constructor() { }

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
