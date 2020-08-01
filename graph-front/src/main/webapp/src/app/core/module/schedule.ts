export interface Schedule {

  id: Number;
  label: string,
  cron: string;
  lastUpdate: Date;
  nextUpdate: Date;

}
