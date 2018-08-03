import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainNavService {

  public isShowModifyIcons$ = new BehaviorSubject<boolean>(false);
  public isShowAddIcon$ = new BehaviorSubject<boolean>(false);
  public isShowEditIcon$ = new BehaviorSubject<boolean>(false);
  public isShowSubmitIcon$ = new BehaviorSubject<boolean>(false);
  public isShowBackIcon$ = new BehaviorSubject<boolean>(false);

  public addIconPushed$ = new Subject<boolean>();
  public editIconPushed$ = new Subject<boolean>();
  public submitIconPushed$ = new Subject<boolean>();
  public backIconPushed$ = new Subject<boolean>();

  constructor() { }

  public onAddIconPushed(): Observable<boolean> {
    return this.addIconPushed$.asObservable();
  }

  public addIconPushed(): void {
    this.addIconPushed$.next(true);
  }

  public onEditIconPushed(): Observable<boolean> {
    return this.editIconPushed$.asObservable();
  }

  public editIconPushed(): void {
    this.editIconPushed$.next(true);
  }

  public onSubmitIconPushed(): Observable<boolean> {
    return this.submitIconPushed$.asObservable();
  }

  public submitIconPushed(): void {
    this.submitIconPushed$.next(true);
  }

  public onBackIconPushed(): Observable<boolean> {
    return this.backIconPushed$.asObservable();
  }

  public backtIconPushed(): void {
    this.backIconPushed$.next(true);
  }

  public isShowModifyIcons(): Observable<boolean> {
    return this.isShowModifyIcons$.asObservable();
  }

  public isShowAddIcon(): Observable<boolean> {
    return this.isShowAddIcon$.asObservable();
  }

  public isShowEditIcon(): Observable<boolean> {
    return this.isShowEditIcon$.asObservable();
  }

  public isShowSubmitIcon(): Observable<boolean> {
    return this.isShowSubmitIcon$.asObservable();
  }

  public isShowBackIcon(): Observable<boolean> {
    return this.isShowBackIcon$.asObservable();
  }

  public showModifyIcons(): void {
    this.isShowModifyIcons$.next(true);
  }

  public hideModifyIcons(): void {
    this.isShowModifyIcons$.next(false);
  }

  public showAddIcon(): void {
    this.isShowAddIcon$.next(true);
  }

  public hideAddIcon(): void {
    this.isShowAddIcon$.next(false);
  }

  public showEditIcon(): void {
    this.isShowEditIcon$.next(true);
  }

  public hideEditIcon(): void {
    this.isShowEditIcon$.next(false);
  }

  public showSubmitIcon(): void {
    this.isShowSubmitIcon$.next(true);
  }

  public hideSubmitIcon(): void {
    this.isShowSubmitIcon$.next(false);
  }

  public showBackIcon(): void {
    this.isShowBackIcon$.next(true);
  }

  public hideBackIcon(): void {
    this.isShowBackIcon$.next(false);
  }

}
