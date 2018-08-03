import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeaderIconsService } from '../../services/header-icons.service';

@Component({
  selector: 'app-header-icons',
  templateUrl: './header-icons.component.html',
  styleUrls: ['./header-icons.component.scss']
})
export class HeaderIconsComponent {

  public isShowAddIcon: Observable<boolean>;
  public isShowEditIcon: Observable<boolean>;
  public isShowSubmitIcon: Observable<boolean>;
  public isShowBackIcon: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute,
              private location: Location,
              private headerIconsService: HeaderIconsService) {

    this.isShowAddIcon = headerIconsService.isShowAddIcon();
    this.isShowEditIcon = headerIconsService.isShowEditIcon();
    this.isShowSubmitIcon = headerIconsService.isShowSubmitIcon();
    this.isShowBackIcon = headerIconsService.isShowBackIcon();
  }

  public onEditButtonPush() {
    this.headerIconsService.editIconPushed();
  }

  public onSubmitButtonPush() {
    this.headerIconsService.submitIconPushed();
  }

  public onAddButtonPush() {
    this.headerIconsService.addIconPushed();
  }

  public onBackButtonPush() {
     this.location.back();
  }

}
