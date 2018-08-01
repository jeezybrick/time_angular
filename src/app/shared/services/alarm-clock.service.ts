import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AlarmClockService {

  public isEditMode$ = new BehaviorSubject<boolean>(false);

  constructor(@Optional() @Inject(APP_BASE_HREF) origin: string) { }

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
