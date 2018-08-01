import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainNavService {

  public isShowModifyIcons$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public isShowModifyIcons(): Observable<boolean> {
    return this.isShowModifyIcons$.asObservable();
  }

  public showModifyIcons() {
    this.isShowModifyIcons$.next(true);
  }

  public hideModifyIcons() {
    this.isShowModifyIcons$.next(false);
  }

}
