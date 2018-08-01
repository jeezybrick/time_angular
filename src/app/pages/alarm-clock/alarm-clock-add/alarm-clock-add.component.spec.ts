import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmClockAddComponent } from './alarm-clock-add.component';

describe('AlarmClockAddComponent', () => {
  let component: AlarmClockAddComponent;
  let fixture: ComponentFixture<AlarmClockAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmClockAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmClockAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
