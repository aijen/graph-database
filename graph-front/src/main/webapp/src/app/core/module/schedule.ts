import { Moment } from 'moment';

export interface Schedule {

  id: number;
  label: string,
  cron: string;
  lastUpdate: Moment;
  nextUpdate: Moment;

}
