import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmClockEditComponent } from './alarm-clock-edit.component';

describe('AlarmClockEditComponent', () => {
  let component: AlarmClockEditComponent;
  let fixture: ComponentFixture<AlarmClockEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmClockEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmClockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
