import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmClockListComponent } from './alarm-clock-list.component';

describe('AlarmClockListComponent', () => {
  let component: AlarmClockListComponent;
  let fixture: ComponentFixture<AlarmClockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmClockListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmClockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
