export class Alarm {

  public id: number;
  public time: Date;
  public daysOfWeek: string[];
  public name: string;
  public melody: string;
  public isRepeatSignal: boolean;
  public disable: boolean;


  constructor(id: number, time: Date, daysOfWeek: string[], name: string, melody: string, isRepeatSignal: boolean) {

    this.id = id;
    this.time = time;
    this.daysOfWeek = daysOfWeek;
    this.name = name;
    this.melody = melody;
    this.isRepeatSignal = isRepeatSignal;

  }

}
