import { AlarmClockModule } from './alarm-clock.module';

describe('AlarmClockModule', () => {
  let alarmClockModule: AlarmClockModule;

  beforeEach(() => {
    alarmClockModule = new AlarmClockModule();
  });

  it('should create an instance', () => {
    expect(alarmClockModule).toBeTruthy();
  });
});
