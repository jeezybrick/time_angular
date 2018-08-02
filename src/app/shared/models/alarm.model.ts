export class Alarm {

  public id: number;
  public time: Date;
  public daysOfWeek: string[];
  public name: string;
  public melody: string;
  public isRepeatSignal: boolean;
  public disable: boolean;
  public removeMode: boolean;

  constructor() {}
}
