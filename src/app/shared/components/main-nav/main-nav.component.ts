import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AlarmClockService } from '../../services/alarm-clock.service';
import { MainNavService } from '../../services/main-nav.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  public isShowAddIcon: Observable<boolean>;
  public isShowEditIcon: Observable<boolean>;
  public isShowSubmitIcon: Observable<boolean>;
  public isShowBackIcon: Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute,
              private location: Location,
              private alarmClockService: AlarmClockService,
              private mainNavService: MainNavService) {

    this.isShowAddIcon = mainNavService.isShowAddIcon();
    this.isShowEditIcon = mainNavService.isShowEditIcon();
    this.isShowSubmitIcon = mainNavService.isShowSubmitIcon();
    this.isShowBackIcon = mainNavService.isShowBackIcon();
  }

  public closeSidebarByClick(drawer): void {

    if (drawer.mode === 'over') {
      drawer.close();
    }
  }

  public onEditButtonPush() {
    this.mainNavService.editIconPushed();
  }

  public onSubmitButtonPush() {
    this.mainNavService.submitIconPushed();
  }

  public onAddButtonPush() {
    this.mainNavService.addIconPushed();
  }

  public onBackButtonPush() {
     this.location.back();
  }


}
