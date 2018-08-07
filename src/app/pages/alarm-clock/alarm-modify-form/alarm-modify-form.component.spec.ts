import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmModifyFormComponent } from './alarm-modify-form.component';

describe('AlarmModifyFormComponent', () => {
  let component: AlarmModifyFormComponent;
  let fixture: ComponentFixture<AlarmModifyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmModifyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
